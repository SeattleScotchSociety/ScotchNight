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

            TableOperation operation = TableOperation.Insert(entity);

            return _table.ExecuteAsync(operation);
        }

        public Task UpdateAsync(Bottle bottle)
        {
            var entity = bottle.Adapt<BottleEntity>();

            TableOperation operation = TableOperation.InsertOrMerge(entity);

            return _table.ExecuteAsync(operation);
        }

        public Task DeleteAsync(Bottle bottle)
        {
            var entity = bottle.Adapt<BottleEntity>();

            // <tmerkel> - This is fine given our expected usage.  If we were worried about
            // losing other people's updates since query...this would be bad.
            entity.ETag = "*";

            TableOperation operation = TableOperation.Delete(entity);

            return _table.ExecuteAsync(operation);
        }

        public async Task<IEnumerable<Bottle>> GetAllAsync()
        {
            var bottles = await _table.ExecuteQuerySegmentedAsync(new TableQuery<BottleEntity>(), null);

            return bottles.Results.Adapt<IEnumerable<Bottle>>();
        }

        public async Task<Bottle> GetAsync(string id)
        {
            var filter = TableQuery.GenerateFilterCondition(
                "RowKey",
                QueryComparisons.GreaterThanOrEqual,
                id);

            var bottles = await _table.ExecuteQuerySegmentedAsync(new TableQuery<BottleEntity>().Where(filter), null);

            return bottles.Results.Adapt<IList<Bottle>>()[0];
        }
    }
}
