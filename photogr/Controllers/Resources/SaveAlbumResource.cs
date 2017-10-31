using PhotogrSite.Controllers.Resources;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace PhotogrSite.Controllers.Resources
{
  public class SaveAlbumResource
  {
    public int AlbumID { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public ICollection<PhotoResource> Photos { get; set; }

    public SaveAlbumResource()
    {
      Photos = new Collection<PhotoResource>();
    }
  }
}
