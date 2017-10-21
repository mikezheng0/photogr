using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;

namespace Photogr.Services.Models
{
    public class Album
    {
        public int AlbumID { get; set; }

        public ICollection<Photo> Photos { get; set; }

        public Album()
        {
            Photos = new Collection<Photo>();
        }
    }
}
