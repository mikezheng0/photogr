using Photogr.Services.Models;
using System.Threading.Tasks;

namespace Photogr.Services.Core
{
    public interface IUserRepository
    {
        void Add(User user);
        Task<User> GetUserAsync(int id);
    }
}
