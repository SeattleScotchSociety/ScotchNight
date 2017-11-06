using System;
using System.ComponentModel.DataAnnotations;

namespace SeattleScotchSociety.ScotchNight.Api.Models
{
    public class Bottle
    {
        public Guid Id { get; set; }

        [Required]
        public string Distillery { get; set; }

        [Required]
        public string Name { get; set; }

        public int Age { get; set; }

        public string Description { get; set; }

        public Note SummaryNote { get; set; }

        public Note MemberNote { get; set; }
    }
}
