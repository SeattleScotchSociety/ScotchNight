using System.Collections.Generic;
using System.Threading.Tasks;
using SeattleScotchSociety.ScotchNight.Api.Models;

namespace SeattleScotchSociety.ScotchNight.Api.Data
{
    public interface IUserStore
    {
        Task AddAsync(User user);

        Task UpdateAsync(User user);

        Task<IEnumerable<User>> GetAllAsync();

        Task InitializeAsync();
    }
}