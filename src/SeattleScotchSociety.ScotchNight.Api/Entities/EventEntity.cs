using Microsoft.WindowsAzure.Storage.Table;
using System;
using SeattleScotchSociety.ScotchNight.Api.Models;
using System.Collections.Generic;

namespace SeattleScotchSociety.ScotchNight.Api.Entities
{
    public class EventEntity : TableEntity
    {
        private string _id;
        private string _locationId;

        public EventEntity()
        {
        }

        public string LocationId
        {
            get
            {
                return _locationId;
            }

            set
            {
                _locationId = value;
                PartitionKey = value;
            }
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

        public string Title { get; set; }

        public string Description { get; set; }

        public IEnumerable<string> Attendees { get; set; }
    }
}
