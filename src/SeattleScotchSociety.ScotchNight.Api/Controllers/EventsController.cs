using Microsoft.AspNetCore.Mvc;
using SeattleScotchSociety.ScotchNight.Api.Data;
using SeattleScotchSociety.ScotchNight.Api.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using SeattleScotchSociety.ScotchNight.Api.Filters;

namespace SeattleScotchSociety.ScotchNight.Api.Controllers
{
    [Route("api/[controller]")]
    [ValidateModel]
    public class EventsController : Controller
    {
        private IEventStore _eventStore;

        public EventsController(IEventStore eventStore)
        {
            _eventStore = eventStore;
        }

        [HttpGet]
        public Task<IEnumerable<Event>> GetAllAsync()
        {
            return _eventStore.GetAllAsync();
        }

        [HttpGet("{id}")]
        public Bottle Get(Guid id)
        {
            return null;
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody]Event @event)
        {
            @event.Id = Guid.NewGuid().ToString();

            await _eventStore.AddAsync(@event);

            return Accepted();
        }

        [HttpPut]
        public async Task<IActionResult> PutAsync([FromBody]Event @event)
        {
            await _eventStore.UpdateAsync(@event);

            return Accepted();
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromBody]Event @event)
        {
            await _eventStore.DeleteAsync(@event);

            return Accepted();
        }
    }
}
