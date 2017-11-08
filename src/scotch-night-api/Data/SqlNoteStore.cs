using Dapper;
using Mapster;
using Microsoft.WindowsAzure.Storage.Table;
using SeattleScotchSociety.ScotchNight.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using System.Data;
using System.Data.SqlClient;

namespace SeattleScotchSociety.ScotchNight.Api.Data
{
    public class SqlNoteStore : INoteStore
    {
        private string _connectionString;

        public SqlNoteStore(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task AddAsync(Note note)
        {
            await DeleteAsync(note);

            using (var connection = new SqlConnection(_connectionString))
            {
                string query = "INSERT INTO Note (BottleId, MemberId, Rating, Finish, Fruity, Vanilla, Smokey, Citrus, Oily, Peppery, Thoughts, Tags)"
                                + " VALUES(@BottleId, @MemberId, @Rating, @Finish, @Fruity, @Vanilla, @Smokey, @Citrus, @Oily, @Peppery, @Thoughts, @Tags)";
                connection.Open();

                await connection.ExecuteAsync(query, note);
            }
        }

        public async Task UpdateAsync(Note note)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = "UPDATE Note "
                                + " SET Rating = @Rating, Finish = @Finish, Fruity = @Fruity, Vanilla = @Vanilla, Smokey = @Smokey, Citrus = @Citrus, Oily = @Oily, Peppery = @Peppery, Thoughts = @Thoughts, Tags = @Tags"
                                + " WHERE BottleId = @BottleId AND MemberId = @MemberId";
                connection.Open();

                await connection.ExecuteAsync(query, note);
            }
        }

        public async Task DeleteAsync(Note note)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = "DELETE Note "
                                + " WHERE MemberId = @MemberId AND BottleId = @BottleId";
                connection.Open();

                await connection.ExecuteAsync(query, note);
            }
        }

        public async Task<IEnumerable<Note>> GetAllAsync()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = "SELECT * FROM Note";

                connection.Open();

                return await connection.QueryAsync<Note>(query);
            }
        }

        public async Task<IEnumerable<Note>> GetByBottle(Guid bottleId)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = $"SELECT * FROM Note WHERE BottleId = '{bottleId}'";

                connection.Open();

                return await connection.QueryAsync<Note>(query);
            }
        }

        public async Task<Note> GetByMember(Guid memberId, Guid bottleId)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = $"SELECT * FROM Note WHERE MemberId = '{memberId}' AND BottleId = '{bottleId}'";

                connection.Open();

                var results = (await connection.QueryAsync<Note>(query)).AsList();

                return results.Count > 0 ? results[0] : null;
            }
        }
    }
}