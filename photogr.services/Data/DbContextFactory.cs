using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace Photogr.Services.Data
{
    public class DbContextFactory : IDesignTimeDbContextFactory<PhotogrContext>
    {
        //////// 
        public PhotogrContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<PhotogrContext>();
            IConfigurationRoot configuration = new ConfigurationBuilder()
              .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
              .AddJsonFile("appsettings.json")
              .Build();
            builder.UseSqlServer("Server=.\\SQLEXPRESS;Database=photogr;Trusted_Connection=True;MultipleActiveResultSets=true");
            return new PhotogrContext(builder.Options);
        }


    }
}
