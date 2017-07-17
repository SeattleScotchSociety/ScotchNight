using Microsoft.WindowsAzure.Storage.Table;
using System;
using SeattleScotchSociety.ScotchNight.Api.Models;
using System.Collections.Generic;

namespace SeattleScotchSociety.ScotchNight.Api.Entities
{
    public class NoteEntity : TableEntity
    {
        private string _bottleId;
        private string _userId;

        public NoteEntity()
        {
        }

        public string BottleId
        {
            get
            {
                return _bottleId;
            }

            set
            {
                _bottleId = value;
                PartitionKey = value;
            }
        }

        public string UserId
        {
            get
            {
                return _userId;
            }

            set
            {
                _userId = value;
                RowKey = value;
            }
        }

        public int Rating { get; set; }

        public int Finish { get; set; }

        public int Fruity { get; set; }

        public int Vanilla { get; set; }

        public int Smokey { get; set; }

        public int Citris { get; set; }

        public int Oily { get; set; }

        public int Peppery { get; set; }

        public string Thoughts { get; set; }
    }
}
