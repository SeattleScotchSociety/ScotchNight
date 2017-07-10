using System.ComponentModel.DataAnnotations;

namespace SeattleScotchSociety.ScotchNight.Api.Models
{
    public class Note
    {
        [Required]
        [Range(1, 5)]
        public int Rating { get; set; }

        [Required]
        public string Nose { get; set; }

        public int Body { get; set; }

        public string Finish { get; set; }
    }
}
