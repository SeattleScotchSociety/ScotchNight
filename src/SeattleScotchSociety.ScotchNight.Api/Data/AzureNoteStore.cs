using Mapster;
using Microsoft.WindowsAzure.Storage.Table;
using SeattleScotchSociety.ScotchNight.Api.Entities;
using SeattleScotchSociety.ScotchNight.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SeattleScotchSociety.ScotchNight.Api.Data
{
    public class AzureNoteStore : INoteStore
    {
        private CloudTable _table;

        public AzureNoteStore(CloudTableClient tableClient)
        {
            _table = tableClient.GetTableReference("notes");
        }

        public async Task InitializeAsync()
        {
            await _table.CreateIfNotExistsAsync();
        }

        public Task AddAsync(Note note)
        {
            var entity = note.Adapt<NoteEntity>();

            TableOperation operation = TableOperation.Insert(entity);

            return _table.ExecuteAsync(operation);
        }

        public Task UpdateAsync(Note note)
        {
            var entity = note.Adapt<NoteEntity>();

            TableOperation operation = TableOperation.InsertOrMerge(entity);

            return _table.ExecuteAsync(operation);
        }

        public Task DeleteAsync(Note note)
        {
            var entity = note.Adapt<NoteEntity>();

            // <tmerkel> - This is fine given our expected usage.  If we were worried about
            // losing other people's updates since query...this would be bad.
            entity.ETag = "*";

            TableOperation operation = TableOperation.Delete(entity);

            return _table.ExecuteAsync(operation);
        }

        public async Task<IEnumerable<Note>> GetAllAsync()
        {
            var users = await _table.ExecuteQuerySegmentedAsync(new TableQuery<NoteEntity>(), null);

            return users.Results.Adapt<IEnumerable<Note>>();
        }
    }
}
