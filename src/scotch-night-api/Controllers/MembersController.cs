using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SeattleScotchSociety.ScotchNight.Api.Data;
using SeattleScotchSociety.ScotchNight.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SeattleScotchSociety.ScotchNight.Api.Filters;

namespace SeattleScotchSociety.ScotchNight.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ValidateModel]
    public class MembersController : Controller
    {
        private IEventStore _eventStore;

        private IMemberStore _memberStore;

        public MembersController(IMemberStore memberStore, IEventStore eventStore)
        {
            _memberStore = memberStore;
            _eventStore = eventStore;
        }

        [HttpGet]
        public async Task<IEnumerable<Member>> GetAllAsync()
        {
            return await _memberStore.GetAllAsync();
        }

        [HttpGet("{email}")]
        public async Task<Member> Get(string email)
        {
            var members = await _memberStore.GetAllAsync();

            return members.FirstOrDefault(m => m.Email == email);
        }

        [HttpGet("{memberId}/events")]
        public async Task<IEnumerable<Event>> GetEvents(Guid memberId)
        {
            var events = await _eventStore.GetAllAsync();

            return events.Where(e => e.Attendees.Contains(memberId));
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody]Member user)
        {
            user.Id = Guid.NewGuid();

            await _memberStore.AddAsync(user);

            return Ok();
        }

        [HttpPut]
        public async void PutAsync([FromBody]Member user)
        {
            await _memberStore.UpdateAsync(user);
        }

        [HttpDelete]
        public async void Delete([FromBody]Member user)
        {
            user.IsActive = false;
            await _memberStore.UpdateAsync(user);
        }
    }
}
