using Microsoft.EntityFrameworkCore;
using Photogr.Services.Core;
using Photogr.Services.Data;
using Photogr.Services.Models;
using System.Linq;
using System.Threading.Tasks;

namespace Photogr.Services.Persistence
{
    public class UserRepository : IUserRepository
    {
        private readonly PhotogrContext context;

        public UserRepository(PhotogrContext context)
        {
            this.context = context;
        }

        public void Add(User user)
        {
            context.Add(user);
        }

        public async Task<User> GetUserAsync(int id)
        {
            return await context.Users
             .Include(u => u.Events)
             .Include(u => u.Albums)
                .ThenInclude(a => a.Photos)
             .SingleOrDefaultAsync(u => u.UserID == id);
        }
    }
}
