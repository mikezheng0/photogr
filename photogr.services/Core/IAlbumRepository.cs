using Photogr.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Photogr.Services.Core
{
    public interface IAlbumRepository
    {
        void Add(Album album);
    }
}
