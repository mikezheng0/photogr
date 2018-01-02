using System;
using System.Collections.Generic;
using System.Text;

namespace Photogr.Services.Extentions
{
    public interface IQueryObject
    {
        string SortBy { get; set; }
        bool IsSortAscending { get; set; }
        int Page { get; set; }
        byte PageSize { get; set; }
    }
}
