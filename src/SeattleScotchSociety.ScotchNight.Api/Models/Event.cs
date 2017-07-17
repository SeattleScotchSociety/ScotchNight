using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SeattleScotchSociety.ScotchNight.Api.Models
{
    public class Event
    {
        public string Id { get; set; }

        public string LocationId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public IEnumerable<string> Attendees { get; set; }
    }
}
