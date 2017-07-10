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
    public class UsersController : Controller
    {
        private IUserStore _userStore;
        private List<User> _users = new List<User>();

        public UsersController(IUserStore userStore)
        {
            _userStore = userStore;
        }

        [HttpGet]
        public Task<IEnumerable<User>> GetAllAsync()
        {
            return _userStore.GetAllAsync();
        }

        [HttpGet("{id}")]
        public Bottle Get(Guid id)
        {
            return null;
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody]User user)
        {
            await _userStore.AddAsync(user);

            return Ok();
        }

        [HttpPut]
        public async void PutAsync([FromBody]User user)
        {
            await _userStore.UpdateAsync(user);
        }

        [HttpDelete]
        public async void Delete([FromBody]User user)
        {
            user.IsActive = false;
            await _userStore.UpdateAsync(user);
        }
    }
}
