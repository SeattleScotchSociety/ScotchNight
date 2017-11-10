using Dapper;
using SeattleScotchSociety.ScotchNight.Api.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace SeattleScotchSociety.ScotchNight.Api.Data
{
    public class SqlBottleStore : IBottleStore
    {
        private string _connectionString;

        public SqlBottleStore(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task AddAsync(Bottle location)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = "INSERT INTO Bottle (Id, Distillery, Name, Age, Description)"
                                + " VALUES(@Id, @Distillery, @Name, @Age, @Description)";
                connection.Open();

                await connection.ExecuteAsync(query, location);
            }
        }

        public async Task UpdateAsync(Bottle location)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = "UPDATE Bottle "
                                + " SET Name = @Name, Distillery = @Distillery, Age = @Age, Description = @Description)"
                                + " WHERE Id = @Id";
                connection.Open();

                await connection.ExecuteAsync(query, location);
            }
        }

        public async Task DeleteAsync(Bottle location)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = @"DELETE Note
                                  WHERE BottleId = @Id;
                                  
                                 DELETE EventBottle
                                  WHERE BottleId = @Id;

                                 DELETE Bottle
                                  WHERE Id = @Id;";
                connection.Open();

                await connection.ExecuteAsync(query, location);
            }
        }

        public async Task<IEnumerable<Bottle>> GetAllAsync()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = "SELECT * FROM Bottle";

                connection.Open();

                return await connection.QueryAsync<Bottle>(query);
            }
        }

        public async Task<Bottle> GetAsync(string id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = $"SELECT * FROM Bottle WHERE Id = @Id";

                connection.Open();

                var results = await connection.QueryAsync<Bottle>(query, new { Id = id });

                return results.ToList().FirstOrDefault();
            }
        }
    }
}