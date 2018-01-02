using Photogr.Services.Extentions;
using System;
using System.Collections.Generic;
using System.Text;

namespace Photogr.Services.Models
{
    public class EventQuery : IQueryObject
    {
        public string SortBy { get; set; }
        public bool IsSortAscending { get; set; }
        public int Page { get; set; }
        public byte PageSize { get; set; }
    }
}
