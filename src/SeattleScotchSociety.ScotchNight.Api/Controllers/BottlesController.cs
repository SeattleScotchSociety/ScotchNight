using Microsoft.AspNetCore.Mvc;
using SeattleScotchSociety.ScotchNight.Api.Models;
using System;
using System.Collections.Generic;

namespace SeattleScotchSociety.ScotchNight.Api.Controllers
{
    [Route("api/[controller]")]
    public class BottlesController : Controller
    {
        private List<Bottle> _bottles = new List<Bottle>
            {
                new Bottle {
                    Id = Guid.NewGuid(),
                    Distillery = "Westland",
                    Name = "Peated",
                    Age = 25,
                    Notes = "Aged in whiskey barrels"
                }
            };

        [HttpGet]
        public IEnumerable<Bottle> Get()
        {
            return _bottles;
        }

        [HttpGet("{id}")]
        public Bottle Get(Guid id)
        {
            return _bottles[0];
        }

        [HttpPost]
        public void Post([FromBody]Bottle bottle)
        {
            _bottles.Add(bottle);
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
