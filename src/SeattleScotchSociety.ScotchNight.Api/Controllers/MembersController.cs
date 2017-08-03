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
    public class MembersController : Controller
    {
        private IMemberStore _memberStore;

        public MembersController(IMemberStore memberStore)
        {
            _memberStore = memberStore;
        }

        [HttpGet]
        public async Task<IEnumerable<Member>> GetAllAsync()
        {
            return await _memberStore.GetAllAsync();
        }

        [HttpGet("{id}")]
        public Member Get(Guid id)
        {
            return null;
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
