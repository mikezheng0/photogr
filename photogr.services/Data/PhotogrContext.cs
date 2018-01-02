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
        public DbSet<Event> Events { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Photo>().ToTable("Photos");
            modelBuilder.Entity<Album>().ToTable("Albums");
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<Event>().ToTable("Events");

        }
    }
}
