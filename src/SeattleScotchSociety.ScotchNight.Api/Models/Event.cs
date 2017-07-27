using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System;

namespace SeattleScotchSociety.ScotchNight.Api.Models
{
    public class Event
    {
        public string Id { get; set; }

        public string LocationId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public IEnumerable<string> Attendees { get; set; }

        public DateTimeOffset Date { get; set; }
    }
}
