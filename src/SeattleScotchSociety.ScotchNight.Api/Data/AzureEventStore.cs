using Mapster;
using Microsoft.WindowsAzure.Storage.Table;
using SeattleScotchSociety.ScotchNight.Api.Entities;
using SeattleScotchSociety.ScotchNight.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SeattleScotchSociety.ScotchNight.Api.Data
{
    public class AzureEventStore : IEventStore
    {
        private CloudTable _table;

        public AzureEventStore(CloudTableClient tableClient)
        {
            _table = tableClient.GetTableReference("events");
        }

        public async Task InitializeAsync()
        {
            await _table.CreateIfNotExistsAsync();
        }

        public Task AddAsync(Event @event)
        {
            var entity = @event.Adapt<EventEntity>();

            TableOperation operation = TableOperation.Insert(entity);

            return _table.ExecuteAsync(operation);
        }

        public Task UpdateAsync(Event @event)
        {
            var entity = @event.Adapt<EventEntity>();

            TableOperation operation = TableOperation.InsertOrMerge(entity);

            return _table.ExecuteAsync(operation);
        }

        public Task DeleteAsync(Event @event)
        {
            var entity = @event.Adapt<EventEntity>();

            // <tmerkel> - This is fine given our expected usage.  If we were worried about
            // losing other people's updates since query...this would be bad.
            entity.ETag = "*";

            TableOperation operation = TableOperation.Delete(entity);

            return _table.ExecuteAsync(operation);
        }

        public async Task<IEnumerable<Event>> GetAllAsync()
        {
            var bob = await _table.ExecuteQuerySegmentedAsync(new TableQuery<EventEntity>(), null);

            return bob.Results.Adapt<IEnumerable<Event>>();
        }
    }
}
