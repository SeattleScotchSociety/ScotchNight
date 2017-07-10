using Mapster;
using Microsoft.WindowsAzure.Storage.Table;
using SeattleScotchSociety.ScotchNight.Api.Entities;
using SeattleScotchSociety.ScotchNight.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SeattleScotchSociety.ScotchNight.Api.Data
{
    public class AzureUserStore : IUserStore
    {
        private CloudTable _table;

        public AzureUserStore(CloudTableClient tableClient)
        {
            _table = tableClient.GetTableReference("users");
        }

        public async Task InitializeAsync()
        {
            await _table.CreateIfNotExistsAsync();
        }

        public Task AddAsync(User user)
        {
            var entity = user.Adapt<UserEntity>();

            TableOperation operation = TableOperation.Insert(entity);

            return _table.ExecuteAsync(operation);
        }

        public Task UpdateAsync(User user)
        {
            var entity = user.Adapt<UserEntity>();

            TableOperation operation = TableOperation.InsertOrMerge(entity);

            return _table.ExecuteAsync(operation);
        }

        public async Task<IEnumerable<User>> GetAllAsync()
        {
            var users = await _table.ExecuteQuerySegmentedAsync(new TableQuery<UserEntity>(), null);

            return users.Results.Adapt<IEnumerable<User>>();
        }
    }
}
