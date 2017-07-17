using Microsoft.WindowsAzure.Storage.Table;
using System;
using SeattleScotchSociety.ScotchNight.Api.Models;

namespace SeattleScotchSociety.ScotchNight.Api.Entities
{
    public class BottleEntity : TableEntity
    {
        private string _distillery;
        private string _id;

        public BottleEntity()
        {
        }

        public string Distillery
        {
            get
            {
                return _distillery;
            }

            set
            {
                _distillery = value;
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

        public string Name { get; set; }

        public int Age { get; set; }

        public string Notes { get; set; }
    }
}
