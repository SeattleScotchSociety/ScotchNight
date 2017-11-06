using System.Collections.Generic;
using System.Threading.Tasks;
using SeattleScotchSociety.ScotchNight.Api.Models;

namespace SeattleScotchSociety.ScotchNight.Api.Data
{
    public interface IMemberStore
    {
        Task AddAsync(Member member);

        Task UpdateAsync(Member member);

        Task<IEnumerable<Member>> GetAllAsync();
    }
}