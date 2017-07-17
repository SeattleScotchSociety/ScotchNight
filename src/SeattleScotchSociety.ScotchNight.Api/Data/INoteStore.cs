using System.Collections.Generic;
using System.Threading.Tasks;
using SeattleScotchSociety.ScotchNight.Api.Models;

namespace SeattleScotchSociety.ScotchNight.Api.Data
{
    public interface INoteStore
    {
        Task AddAsync(Note bottle);

        Task UpdateAsync(Note bottle);

        Task DeleteAsync(Note bottle);

        Task<IEnumerable<Note>> GetAllAsync();

        Task InitializeAsync();
    }
}