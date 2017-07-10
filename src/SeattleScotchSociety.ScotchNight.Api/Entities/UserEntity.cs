using Microsoft.WindowsAzure.Storage.Table;
using System;
using SeattleScotchSociety.ScotchNight.Api.Models;

namespace SeattleScotchSociety.ScotchNight.Api.Entities
{
    public class UserEntity : TableEntity
    {
        private string _id;
        private string _email;

        public UserEntity()
        {
        }

        public string Id
        {
            get
            {
                return _id;
            }

            set
            {
                _id = value;
                PartitionKey = value;
            }
        }

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

        public string LastName { get; set; }

        public bool IsActive { get; set; }
    }
}
