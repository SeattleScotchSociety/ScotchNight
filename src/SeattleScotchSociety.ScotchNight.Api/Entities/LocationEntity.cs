using Microsoft.WindowsAzure.Storage.Table;
using System;
using SeattleScotchSociety.ScotchNight.Api.Models;

namespace SeattleScotchSociety.ScotchNight.Api.Entities
{
    public class LocationEntity : TableEntity
    {
        private string _id;
        private string _name;

        public LocationEntity()
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

        public string Name
        {
            get
            {
                return _name;
            }

            set
            {
                _name = value;
                RowKey = value;
            }
        }

        public string Address1 { get; set; }

        public string Address2 { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string Zip { get; set; }
    }
}
