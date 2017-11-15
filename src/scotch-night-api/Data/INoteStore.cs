using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using SeattleScotchSociety.ScotchNight.Api.Models;

namespace SeattleScotchSociety.ScotchNight.Api.Data
{
    public interface INoteStore
    {
        Task SaveAsync(Note note);

        Task DeleteAsync(Note note);

        Task<IEnumerable<Note>> GetAllAsync();

        Task<IEnumerable<Note>> GetByBottle(Guid bottleId);

        Task<Note> GetByMember(Guid memberId, Guid bottleId);
    }
}