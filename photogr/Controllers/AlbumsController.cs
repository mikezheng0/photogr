using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PhotogrSite.Controllers.Resources;
using AutoMapper;
using Photogr.Services.Models;

namespace PhotogrSite.Controllers
{
  [Route("/api/{userId}")]
  public class AlbumsController : Controller
  {
    private readonly IMapper mapper;

    public AlbumsController(IMapper mapper)
    {
      this.mapper = mapper;
    }

    [HttpPost]
    public IActionResult CreateAlbum(int userId, [FromBody] SaveAlbumResource saveAlbumResource)
    {
      
      if (!ModelState.IsValid)
        return BadRequest(ModelState);

      Album album = mapper.Map<SaveAlbumResource, Album>(saveAlbumResource);
      album.CreationDate = DateTime.Now;
      album.LastUpdatedDate = DateTime.Now;
      return Ok(album);
    }
  }
}
