using System;
using System.ComponentModel.DataAnnotations;

namespace SeattleScotchSociety.ScotchNight.Api.Models
{
    public class Note
    {
        [Required]
        public Guid BottleId { get; set; }

        [Required]
        public Guid MemberId { get; set; }

        [Range(0, 5)]
        public float? Rating { get; set; }

        [Range(0, 100)]
        public float? Finish { get; set; }

        [Range(0, 100)]
        public float? Fruity { get; set; }

        [Range(0, 100)]
        public float? Vanilla { get; set; }

        [Range(0, 100)]
        public float? Smokey { get; set; }

        [Range(0, 100)]
        public float? Citrus { get; set; }

        [Range(0, 100)]
        public float? Oily { get; set; }

        [Range(0, 100)]
        public float? Peppery { get; set; }

        public string Thoughts { get; set; }

        public string Tags { get; set; }
    }
}
