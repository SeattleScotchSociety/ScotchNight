using Microsoft.WindowsAzure.Storage.Table;
using System;
using SeattleScotchSociety.ScotchNight.Api.Models;

namespace SeattleScotchSociety.ScotchNight.Api.Entities
{
    public class BottleEntity : TableEntity
    {
        private string _distillery;
        private string _name;

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

        public int Age { get; set; }

        public string Notes { get; set; }
    }
}
