using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SeattleScotchSociety.ScotchNight.Api.Models
{
    public class SummaryNote
    {
        [Required]
        public Guid BottleId { get; set; }

        [Range(0, 5)]
        public float? Rating { get; set; }

        public Dictionary<string, int> Tags { get; set; }
    }
}
