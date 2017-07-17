using Mapster;
using Microsoft.WindowsAzure.Storage.Table;
using SeattleScotchSociety.ScotchNight.Api.Entities;
using SeattleScotchSociety.ScotchNight.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;

namespace SeattleScotchSociety.ScotchNight.Api.Data
{
    public class AzureLocationStore : ILocationStore
    {
        private CloudTable _table;

        public AzureLocationStore(CloudTableClient tableClient)
        {
            _table = tableClient.GetTableReference("locations");
        }

        public async Task InitializeAsync()
        {
            await _table.CreateIfNotExistsAsync();
        }

        public Task AddAsync(Location location)
        {
            location.Id = Guid.NewGuid().ToString();

            var entity = location.Adapt<LocationEntity>();

            TableOperation operation = TableOperation.Insert(entity);

            return _table.ExecuteAsync(operation);
        }

        public Task UpdateAsync(Location location)
        {
            var entity = location.Adapt<LocationEntity>();

            TableOperation operation = TableOperation.InsertOrMerge(entity);

            return _table.ExecuteAsync(operation);
        }

        public Task DeleteAsync(Location location)
        {
            var entity = location.Adapt<LocationEntity>();

            // <tmerkel> - This is fine given our expected usage.  If we were worried about
            // losing other people's updates since query...this would be bad.
            entity.ETag = "*";

            TableOperation operation = TableOperation.Delete(entity);

            return _table.ExecuteAsync(operation);
        }

        public async Task<IEnumerable<Location>> GetAllAsync()
        {
            var locations = await _table.ExecuteQuerySegmentedAsync(new TableQuery<LocationEntity>(), null);

            return locations.Results.Adapt<IEnumerable<Location>>();
        }
    }
}
