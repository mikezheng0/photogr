using Photogr.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Photogr.Services.Core
{
    public interface IPhotoRepository
    {
        Task<Photo> GetPhotoAsync(int id);
        void Add(Photo photo);
        void remove(Photo photo);
    }
}
