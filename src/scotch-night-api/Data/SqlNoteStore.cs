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

        public async Task SaveAsync(Note note)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = @"MERGE Note AS target 
                                USING (VALUES (@Rating,
                                            @Thoughts,
                                            @Tags,
                                            @BottleId,
                                            @MemberId)) AS source(Rating, Thoughts, Tags, BottleId, MemberId)
                                ON source.MemberID = target.MemberID AND source.BottleId = target.BottleId
                                WHEN MATCHED THEN
                                UPDATE SET target.Thoughts = source.Thoughts,
                                           target.Tags  = source.Tags,
                                           target.Rating = source.Rating
                                WHEN NOT MATCHED THEN
                                INSERT(BottleId,
                                       MemberId,
                                       Thoughts,
                                       Tags,
                                       Rating)
                                VALUES(source.BottleId,
                                       source.MemberId,
                                       source.Thoughts,
                                       source.Tags,
                                       source.Rating); ";
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