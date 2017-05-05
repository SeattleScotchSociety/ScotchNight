using Mapster;
using Microsoft.WindowsAzure.Storage.Table;
using SeattleScotchSociety.ScotchNight.Api.Entities;
using SeattleScotchSociety.ScotchNight.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SeattleScotchSociety.ScotchNight.Api.Data
{
    public class AzureBottleStore : IBottleStore
    {
        private CloudTable _table;

        public AzureBottleStore(CloudTableClient tableClient)
        {
            _table = tableClient.GetTableReference("bottles");
        }

        public async Task InitializeAsync()
        {
            await _table.CreateIfNotExistsAsync();
        }

        public Task AddAsync(Bottle bottle)
        {
            var entity = bottle.Adapt<BottleEntity>();

            TableOperation insertOperation = TableOperation.Insert(entity);

            return _table.ExecuteAsync(insertOperation);
        }

        public async Task<IEnumerable<Bottle>> GetAllAsync()
        {
            var bob = await _table.ExecuteQuerySegmentedAsync(new TableQuery<BottleEntity>(), null);

            return bob.Results.Adapt<IEnumerable<Bottle>>();
        }
    }
}
