using System.Collections.Generic;
using System.Threading.Tasks;
using SeattleScotchSociety.ScotchNight.Api.Models;

namespace SeattleScotchSociety.ScotchNight.Api.Data
{
    public interface IEventStore
    {
        Task AddAsync(Event @event);

        Task UpdateAsync(Event @event);

        Task DeleteAsync(Event @event);

        Task<IEnumerable<Event>> GetAllAsync();

        Task InitializeAsync();
    }
}