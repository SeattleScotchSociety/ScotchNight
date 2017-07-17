using Microsoft.WindowsAzure.Storage.Table;
using System;
using SeattleScotchSociety.ScotchNight.Api.Models;

namespace SeattleScotchSociety.ScotchNight.Api.Entities
{
    public class UserEntity : TableEntity
    {
        private string _lastName;
        private string _email;

        public UserEntity()
        {
        }

        public string Id { get; set; }

        public string Email
        {
            get
            {
                return _email;
            }

            set
            {
                _email = value;
                RowKey = value;
            }
        }

        public string FirstName { get; set; }

        public string LastName
        {
            get
            {
                return _lastName;
            }

            set
            {
                _lastName = value;
                PartitionKey = value;
            }
        }

        public bool IsActive { get; set; }
    }
}
