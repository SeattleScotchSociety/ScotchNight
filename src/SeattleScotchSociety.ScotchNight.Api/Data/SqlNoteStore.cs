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
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = "INSERT INTO Note (BottleId, UserId, Rating, Finish, Fruity, Vanilla, Smokey, Citrus, Oily, Peppery, Thoughts)"
                                + " VALUES(@BottleId, @UserId, @Rating, @Finish, @Fruity, @Vanilla, @Smokey, @Citrus, @Oily, @Peppery, @Thoughts)";
                connection.Open();

                await connection.ExecuteAsync(query, note);
            }
        }

        public async Task UpdateAsync(Note note)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = "UPDATE Note "
                                + " SET Rating = @Rating, Finish = @Finish, Fruity = @Fruity, Vanilla = @Vanilla, Smokey = @Smokey, Citrus = @Citrus, Oily = @Oily, Peppery = @Peppery, Thoughts = @Thoughts)"
                                + " WHERE BottleId = @BottleId AND UserId = @UserId";
                connection.Open();

                await connection.ExecuteAsync(query, note);
            }
        }

        public async Task DeleteAsync(Note note)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = "DELETE Note "
                                + " WHERE Id = @Id";
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
    }
}