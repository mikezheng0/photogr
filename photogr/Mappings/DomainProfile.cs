using PhotogrSite.Controllers.Resources;
using Photogr.Services.Models;
using System.Linq;
using AutoMapper;

namespace PhotogrSite.Mappings
{
  public class DomainProfile : Profile
  {
    public DomainProfile()
    {
      CreateMap<Album, AlbumResource>();
    }
  }
}
