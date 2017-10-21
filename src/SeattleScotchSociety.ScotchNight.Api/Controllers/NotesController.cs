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

        [HttpGet("summary/{bottleId}")]
        public async Task<Note> Get(Guid bottleId)
        {
            var allNotes = await _noteStore.GetByBottle(bottleId);

            var summaryNote = new Note
            {
                BottleId = bottleId,
                MemberId = Guid.Empty,
                Thoughts = string.Empty,
            };

            float? SummarizeRating(IEnumerable<float?> allRatings)
            {
                float? summarizedValue = null;

                if (allRatings.Count() > 0)
                {
                    summarizedValue = (float)(allRatings.Sum(rating => rating) / allRatings.Count());
                }

                return summarizedValue;
            }

            summaryNote.Citrus = SummarizeRating(allNotes.Where(note => note.Citrus != null).Select(note => note.Citrus));
            summaryNote.Finish = SummarizeRating(allNotes.Where(note => note.Finish != null).Select(note => note.Finish));
            summaryNote.Fruity = SummarizeRating(allNotes.Where(note => note.Fruity != null).Select(note => note.Fruity));
            summaryNote.Oily = SummarizeRating(allNotes.Where(note => note.Oily != null).Select(note => note.Oily));
            summaryNote.Peppery = SummarizeRating(allNotes.Where(note => note.Peppery != null).Select(note => note.Peppery));
            summaryNote.Rating = SummarizeRating(allNotes.Where(note => note.Rating != null).Select(note => note.Rating));
            summaryNote.Smokey = SummarizeRating(allNotes.Where(note => note.Smokey != null).Select(note => note.Smokey));
            summaryNote.Vanilla = SummarizeRating(allNotes.Where(note => note.Vanilla != null).Select(note => note.Vanilla));

            return summaryNote;
        }

        [HttpGet("member/{memberId}/bottle/{bottleId}")]
        public async Task<Note> GetByMember(Guid memberId, Guid bottleId)
        {
            return await _noteStore.GetByMember(memberId, bottleId);
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
