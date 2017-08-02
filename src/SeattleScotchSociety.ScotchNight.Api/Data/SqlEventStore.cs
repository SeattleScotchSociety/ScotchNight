using Dapper;
using Mapster;
using Microsoft.WindowsAzure.Storage.Table;
using SeattleScotchSociety.ScotchNight.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace SeattleScotchSociety.ScotchNight.Api.Data
{
    public class SqlEventStore : IEventStore
    {
        private string _connectionString;

        public SqlEventStore(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task AddAsync(Event @event)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = "INSERT INTO Event (Id, LocationId, Title, Description, Date)"
                                + " VALUES(@Id, @LocationId, @Title, @Description, @Date)";

                string bottleQuery = @"INSERT INTO EventBottle (EventId, BottleId)
                                        VALUES(@EventId, @BottleId)";

                string memberQuery = @"INSERT INTO EventMember (EventId, MemberId)
                                        VALUES(@EventId, @MemberId)";

                connection.Open();

                await connection.ExecuteAsync(query, @event);

                await connection.ExecuteAsync(bottleQuery, @event.Bottles.ToList().Select(bottleId => new EventBottle { EventId = @event.Id, BottleId = bottleId }));
                await connection.ExecuteAsync(memberQuery, @event.Attendees.ToList().Select(memberId => new EventMember { EventId = @event.Id, MemberId = memberId }));
            }
        }

        public async Task UpdateAsync(Event @event)
        {
            await DeleteAsync(@event);
            await AddAsync(@event);
        }

        public async Task DeleteAsync(Event @event)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = @"DELETE EventBottle
                                 WHERE EventId = @Id;
                               
                                 DELETE EventMember
                                 WHERE EventId = @Id;
                                 
                                 DELETE Event 
                                 WHERE Id = @Id;";

                connection.Open();

                await connection.ExecuteAsync(query, @event);
            }
        }

        public async Task<IEnumerable<Event>> GetAllAsync()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = "SELECT * FROM Event";

                connection.Open();

                var events = await connection.QueryAsync<Event>(query);

                var eventIds = events.Select(e => e.Id);
                var bottleMappings = connection.Query<EventBottle>(
                    "SELECT * FROM EventBottle WHERE EventId IN @EventIds",
                        new { EventIds = eventIds });

                var attendeeMappings = connection.Query<EventMember>(
                    "SELECT * FROM EventMember WHERE EventId IN @EventIds",
                        new { EventIds = eventIds });

                return events.Select(e =>
                {
                    e.Bottles = bottleMappings.Where(m => m.EventId == e.Id).Select(m => m.BottleId);
                    e.Attendees = attendeeMappings.Where(m => m.EventId == e.Id).Select(m => m.MemberId);

                    return e;
                });
            }
        }

        private class EventBottle
        {
            public Guid EventId { get; set; }

            public Guid BottleId { get; set; }
        }

        private class EventMember
        {
            public Guid EventId { get; set; }

            public Guid MemberId { get; set; }
        }
    }
}