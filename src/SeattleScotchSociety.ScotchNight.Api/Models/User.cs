using System;
using System.ComponentModel.DataAnnotations;

namespace SeattleScotchSociety.ScotchNight.Api.Models
{
    public class User
    {
        public Guid UserId { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public int FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        public bool IsActive { get; set; }
    }
}
