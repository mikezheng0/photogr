using Microsoft.EntityFrameworkCore;
using Photogr.Services.Models;
using System;

namespace Photogr.Services.Data
{
    public class PhotogrContext : DbContext
    {
        public PhotogrContext(DbContextOptions<PhotogrContext> options) : base(options)
        {
        }

        public DbSet<Photo> Photos { get; set; }
        public DbSet<Album> Albums { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Photo>().ToTable("Photo");
            modelBuilder.Entity<Album>().ToTable("Album");
            modelBuilder.Entity<User>().ToTable("User");
            
        }
    }
}
