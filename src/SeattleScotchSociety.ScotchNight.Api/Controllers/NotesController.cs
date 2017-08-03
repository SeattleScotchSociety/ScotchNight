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
    public class NotesController : Controller
    {
        private INoteStore _noteStore;

        public NotesController(INoteStore noteStore)
        {
            _noteStore = noteStore;
        }

        [HttpGet]
        public Task<IEnumerable<Note>> GetAllAsync()
        {
            return _noteStore.GetAllAsync();
        }

        [HttpGet("bottle/{bottleId}")]
        public Task<IEnumerable<Note>> Get(Guid bottleId)
        {
            return _noteStore.GetByBottle(bottleId);
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody]Note note)
        {
            await _noteStore.AddAsync(note);

            return Ok();
        }

        [HttpPut]
        public async void PutAsync([FromBody]Note note)
        {
            await _noteStore.UpdateAsync(note);
        }

        [HttpDelete]
        public async void Delete([FromBody]Note note)
        {
            await _noteStore.DeleteAsync(note);
        }
    }
}
