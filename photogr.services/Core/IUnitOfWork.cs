using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Photogr.Services.Core
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
    }
}
