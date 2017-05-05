using Microsoft.AspNetCore.Mvc;
using SeattleScotchSociety.ScotchNight.Api.Data;
using SeattleScotchSociety.ScotchNight.Api.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SeattleScotchSociety.ScotchNight.Api.Controllers
{
    [Route("api/[controller]")]
    public class BottlesController : Controller
    {
        private IBottleStore _bottleStore;
        private List<Bottle> _bottles = new List<Bottle>
            {
                new Bottle
                {
                    Distillery = "Westland",
                    Name = "Peated",
                    Age = 25,
                    Notes = "Aged in whiskey barrels"
                }
            };

        public BottlesController(IBottleStore bottleStore)
        {
            _bottleStore = bottleStore;
        }

        [HttpGet]
        public Task<IEnumerable<Bottle>> GetAllAsync()
        {
            return _bottleStore.GetAllAsync();
        }

        [HttpGet("{id}")]
        public Bottle Get(Guid id)
        {
            return null;
        }

        [HttpPost]
        public async void PostAsync([FromBody]Bottle bottle)
        {
            await _bottleStore.AddAsync(bottle);
        }

        [HttpPut("{id}")]
        public void Put(Guid id, [FromBody]Bottle value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(Guid id)
        {
        }
    }
}
