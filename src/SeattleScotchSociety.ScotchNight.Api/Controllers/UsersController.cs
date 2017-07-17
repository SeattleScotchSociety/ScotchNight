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

        public UsersController(IUserStore userStore)
        {
            _userStore = userStore;
        }

        [HttpGet]
        public async Task<IEnumerable<User>> GetAllAsync()
        {
            return await _userStore.GetAllAsync();
        }

        [HttpGet("{id}")]
        public User Get(Guid id)
        {
            return null;
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody]User user)
        {
            user.Id = Guid.NewGuid().ToString();

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
