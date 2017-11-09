using Photogr.Services.Core;
using Photogr.Services.Data;
using System;
using System.Collections.Generic;
using System.Text;
using Photogr.Services.Models;

namespace Photogr.Services.Persistence
{
    public class AlbumRepository : IAlbumRepository
    {
        private readonly PhotogrContext context;

        public AlbumRepository(PhotogrContext context)
        {
            this.context = context;
        }

        public void Add(Album album)
        {
            context.Add(album);
        }
    }
}
