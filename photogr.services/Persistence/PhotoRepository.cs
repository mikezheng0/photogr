using Photogr.Services.Core;
using System;
using System.Collections.Generic;
using System.Text;
using Photogr.Services.Models;
using System.Threading.Tasks;
using Photogr.Services.Data;
using Microsoft.EntityFrameworkCore;

namespace Photogr.Services.Persistence
{
    public class PhotoRepository : IPhotoRepository
    {
        private readonly PhotogrContext context;

        public PhotoRepository(PhotogrContext context) {
            this.context = context;
        }

        public void Add(Photo photo)
        {
            context.Add(photo);
        }

        public async Task<Photo> GetPhotoAsync(int id)
        {
            return await context.Photos
                .SingleOrDefaultAsync(p => p.PhotoID == id);
        }

        public void remove(Photo photo)
        {
            context.Remove(photo);
        }
    }
}
