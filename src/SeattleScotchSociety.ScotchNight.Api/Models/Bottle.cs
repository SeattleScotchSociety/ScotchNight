using System;

namespace SeattleScotchSociety.ScotchNight.Api.Models
{
    public class Bottle
    {
        public Guid Id { get; set; }

        public string Distillery { get; set; }

        public string Name { get; set; }
        
        public int Age { get; set; }

        public string Notes { get; set; }
    }
}
