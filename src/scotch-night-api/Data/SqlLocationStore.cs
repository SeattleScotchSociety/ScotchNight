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
    public class SqlLocationStore : ILocationStore
    {
        private string _connectionString;

        public SqlLocationStore(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task AddAsync(Location location)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = "INSERT INTO Location (Id, Name, Address1, Address2, City, State, ZipCode)"
                                + " VALUES(@Id, @Name, @Address1, @Address2, @City, @State, @ZipCode)";
                connection.Open();

                await connection.ExecuteAsync(query, location);
            }
        }

        public async Task UpdateAsync(Location location)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = "UPDATE Location "
                                + " SET Name = @Name, Address1 = @Address1, Address2 = @Address2, City = @City, State = @State, ZipCode = @ZipCode)"
                                + " WHERE Id = @Id";
                connection.Open();

                await connection.ExecuteAsync(query, location);
            }
        }

        public async Task DeleteAsync(Location location)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = "DELETE Location "
                                + " WHERE Id = @Id";
                connection.Open();

                await connection.ExecuteAsync(query, location);
            }
        }

        public async Task<IEnumerable<Location>> GetAllAsync()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = "SELECT * FROM Location";

                connection.Open();

                return await connection.QueryAsync<Location>(query);
            }
        }
    }
}