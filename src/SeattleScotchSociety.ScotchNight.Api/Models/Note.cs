using System.ComponentModel.DataAnnotations;

namespace SeattleScotchSociety.ScotchNight.Api.Models
{
    public class Note
    {
        public string BottleId { get; set; }

        public string UserId { get; set; }

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
        public int Citris { get; set; }

        [Required]
        [Range(1, 5)]
        public int Oily { get; set; }

        [Required]
        [Range(1, 5)]
        public int Peppery { get; set; }

        public string Thoughts { get; set; }
    }
}
