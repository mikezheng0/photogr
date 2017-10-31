using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace PhotogrSite.Controllers.Resources
{
  public class AlbumResource
  {
    public int AlbumID { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime CreationDate { get; set; }
    public DateTime LastUpdatedDate { get; set; }
    public ICollection<PhotoResource> Photos { get; set; }

    public AlbumResource()
    {
      Photos = new Collection<PhotoResource>();
    }
  }
}
