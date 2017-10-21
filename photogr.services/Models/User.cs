using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;

namespace Photogr.Services.Models
{
    public class User
    {
        public int UserID { get; set; }

        public ICollection<Album> Albums { get; set; }

        public User()
        {
            Albums = new Collection<Album>();
        }

    }
}
