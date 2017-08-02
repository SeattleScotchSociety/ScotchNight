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
    public class SqlMemberStore : IMemberStore
    {
        private string _connectionString;

        public SqlMemberStore(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task AddAsync(Member member)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = "INSERT INTO Member (Id, Email, FirstName, LastName, IsActive)"
                                + " VALUES(@Id, @Email, @FirstName, @LastName, @IsActive)";
                connection.Open();

                await connection.ExecuteAsync(query, member);
            }
        }

        public async Task UpdateAsync(Member member)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = "UPDATE Member "
                                + " SET Email = @Email, FirstName = @FirstName, LastName = @LastName, IsActive = @IsActive)"
                                + " WHERE Id = @Id";
                connection.Open();

                await connection.ExecuteAsync(query, member);
            }
        }

        public async Task<IEnumerable<Member>> GetAllAsync()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                string query = "SELECT * FROM Member";

                connection.Open();

                return await connection.QueryAsync<Member>(query);
            }
        }
    }
}