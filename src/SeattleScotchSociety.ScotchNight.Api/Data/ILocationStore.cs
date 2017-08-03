using System.Collections.Generic;
using System.Threading.Tasks;
using SeattleScotchSociety.ScotchNight.Api.Models;

namespace SeattleScotchSociety.ScotchNight.Api.Data
{
    public interface ILocationStore
    {
        Task AddAsync(Location location);

        Task UpdateAsync(Location location);

        Task DeleteAsync(Location location);

        Task<IEnumerable<Location>> GetAllAsync();
    }
}