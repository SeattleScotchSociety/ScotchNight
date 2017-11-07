using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SeattleScotchSociety.ScotchNight.Api.Models
{
    public class Event
    {
        public Guid Id { get; set; }

        public Guid Location { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public IEnumerable<Guid> Bottles { get; set; }

        public IEnumerable<Guid> Attendees { get; set; }

        public DateTimeOffset Date { get; set; }
    }
}
