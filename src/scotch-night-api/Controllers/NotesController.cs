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
        public async Task<SummaryNote> Get(Guid bottleId)
        {
            var allNotes = await _noteStore.GetByBottle(bottleId);

            var summaryNote = new SummaryNote
            {
                BottleId = bottleId
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

            summaryNote.Rating = SummarizeRating(allNotes.Where(note => note.Rating != null).Select(note => note.Rating));

             Dictionary<string, int> SummarizeTags(IEnumerable<string> allTags) {
                var summary = new Dictionary<string, int>();

                foreach(string tags in allTags) {
                    string[] tagArr = tags.Split(',');

                    foreach(string tag in tagArr) {
                        if(!summary.ContainsKey(tag)) {
                            summary.Add(tag, 0);
                        }

                        summary[tag] = summary[tag] + 1;
                    }
                }

                return summary;
            }

            summaryNote.Tags = SummarizeTags(allNotes.Where(note => note.Tags != null).Select(note => note.Tags));

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
