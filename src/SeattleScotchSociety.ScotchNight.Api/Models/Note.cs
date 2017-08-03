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

        [Required]
        [Range(1, 5)]
        public int Rating { get; set; }

        [Required]
        [Range(1, 5)]
        public int Finish { get; set; }

        [Required]
        [Range(1, 5)]
        public int Fruity { get; set; }

        [Required]
        [Range(1, 5)]
        public int Vanilla { get; set; }

        [Required]
        [Range(1, 5)]
        public int Smokey { get; set; }

        [Required]
        [Range(1, 5)]
        public int Citrus { get; set; }

        [Required]
        [Range(1, 5)]
        public int Oily { get; set; }

        [Required]
        [Range(1, 5)]
        public int Peppery { get; set; }

        public string Thoughts { get; set; }
    }
}
