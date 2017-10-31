using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Photogr.Services.Models;
using Photogr.Services.Persistence;
using Photogr.Services.Core;

namespace PhotogrSite.Controllers
{
  [Route("/api/users")]
  public class UsersController : Controller
  {
    private readonly IUserRepository userRepository;
    private readonly IUnitOfWork unitOfWork;

    public UsersController(IUserRepository userRepository, IUnitOfWork unitOfWork) {
      this.userRepository = userRepository;
      this.unitOfWork = unitOfWork;
    }

    [HttpPost]
    public async Task<IActionResult> CreateUsersAsync([FromBody] User user)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }
      
      userRepository.Add(user);
      await unitOfWork.CompleteAsync();

      user = await userRepository.GetUserAsync(user.UserID);

      return Ok(user);
    }
  }
}
