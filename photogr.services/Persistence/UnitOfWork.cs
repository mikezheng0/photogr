using Photogr.Services.Core;
using Photogr.Services.Data;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Photogr.Services.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly PhotogrContext context;

        public UnitOfWork(PhotogrContext context) {
            this.context = context;
        }

        public async Task CompleteAsync()
        {
            await context.SaveChangesAsync();
        }
    }
}
