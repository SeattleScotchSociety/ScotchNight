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
    public class LocationsController : Controller
    {
        private ILocationStore _locationStore;

        public LocationsController(ILocationStore locationStore)
        {
            _locationStore = locationStore;
        }

        [HttpGet]
        public Task<IEnumerable<Location>> GetAllAsync()
        {
            return _locationStore.GetAllAsync();
        }

        [HttpGet("{id}")]
        public Bottle Get(Guid id)
        {
            return null;
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody]Location location)
        {
            await _locationStore.AddAsync(location);

            return Accepted();
        }

        [HttpPut]
        public async Task<IActionResult> PutAsync([FromBody]Location location)
        {
            await _locationStore.UpdateAsync(location);

            return Accepted();
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromBody]Location location)
        {
            await _locationStore.DeleteAsync(location);

            return Accepted();
        }
    }
}
