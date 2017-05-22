using System.Collections.Generic;
using System.Threading.Tasks;
using SeattleScotchSociety.ScotchNight.Api.Models;

namespace SeattleScotchSociety.ScotchNight.Api.Data
{
    public interface IBottleStore
    {
        Task AddAsync(Bottle bottle);

        Task<IEnumerable<Bottle>> GetAllAsync();

        Task InitializeAsync();
    }
}