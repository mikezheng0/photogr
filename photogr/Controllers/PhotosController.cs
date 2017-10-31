using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using Photogr.Services.Models;
using Photogr.Services.Core;

namespace PhotogrSite.Controllers
{
  [Route("/api/photos/{userId}/{albumId}")]
  public class PhotosController : Controller
  {
    private readonly IHostingEnvironment host;
    private readonly IPhotoRepository photoRepository;
    private readonly IUnitOfWork unitOfWork;

    public PhotosController(IHostingEnvironment host, IPhotoRepository photoRepository, IUnitOfWork unitOfWork) {
      this.host = host;
      this.photoRepository = photoRepository;
      this.unitOfWork = unitOfWork;
    }

    [HttpPost]
    public async Task<IActionResult> UploadAsync(int userId, int albumId, IFormFile file)
    {
      string uploadFolderPath = Path.Combine(host.WebRootPath, "uploads");
      if (!Directory.Exists(uploadFolderPath))
      Directory.CreateDirectory(uploadFolderPath);

      string fileName = Guid.NewGuid().ToString()+Path.GetExtension(file.FileName);
      string filePath = Path.Combine(uploadFolderPath, fileName);
      using (var stream = new FileStream(filePath, FileMode.Create))
      {
        await file.CopyToAsync(stream);
      }

      //generate a thumbnail

      Photo photo = new Photo { FileName = fileName };
      await unitOfWork.CompleteAsync();

      return Ok(photo);
    }
  }
}
