using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PhotogrSite.Controllers.Resources
{
  public class PhotoResource
  {
    public int PhotoID { get; set; }
    [Required]
    [StringLength(255)]
    public string FileName { get; set; }
    public string Description { get; set; }
    public string Title { get; set; }
  }
}
