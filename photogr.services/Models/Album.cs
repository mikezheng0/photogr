using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;

namespace Photogr.Services.Models
{
    public class Album
    {
        public int AlbumID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime LastUpdatedDate { get; set; }
        public ICollection<Photo> Photos { get; set; }

        public Album()
        {
            Photos = new Collection<Photo>();
        }
    }
}
