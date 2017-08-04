using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using SeattleScotchSociety.ScotchNight.Api.Models;

namespace SeattleScotchSociety.ScotchNight.Api.Data
{
    public interface INoteStore
    {
        Task AddAsync(Note note);

        Task UpdateAsync(Note note);

        Task DeleteAsync(Note note);

        Task<IEnumerable<Note>> GetAllAsync();

        Task<IEnumerable<Note>> GetByBottle(Guid bottleId);
    }
}