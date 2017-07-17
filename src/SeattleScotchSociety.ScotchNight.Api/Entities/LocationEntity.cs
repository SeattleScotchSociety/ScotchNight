using Microsoft.WindowsAzure.Storage.Table;
using System;
using SeattleScotchSociety.ScotchNight.Api.Models;

namespace SeattleScotchSociety.ScotchNight.Api.Entities
{
    public class LocationEntity : TableEntity
    {
        private string _city;
        private string _id;

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
                RowKey = value;
            }
        }

        public string Name { get; set; }

        public string Address1 { get; set; }

        public string Address2 { get; set; }

        public string City
        {
            get
            {
                return _city;
            }

            set
            {
                _city = value;
                PartitionKey = value;
            }
        }

        public string State { get; set; }

        public string ZipCode { get; set; }
    }
}
