using System.ComponentModel.DataAnnotations;

namespace SeattleScotchSociety.ScotchNight.Api.Models
{
    public class Bottle
    {
        [Required]
        public string Distillery { get; set; }

        [Required]
        public string Name { get; set; }

        public int Age { get; set; }

        public string Notes { get; set; }
    }
}
