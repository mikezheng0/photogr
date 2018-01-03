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
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<Event>()
                .ToTable("Events")
                .HasOne(e => e.User)
                    .WithMany(u => u.Events)
                    .HasForeignKey(u => u.UserID);

            modelBuilder.Entity<Album>()
                .ToTable("Albums")
                .HasOne(a => a.User)
                    .WithMany(u => u.Albums)
                    .HasForeignKey(u => u.UserID);

            modelBuilder.Entity<Photo>()
                .ToTable("Photos")
                .HasOne(p => p.Album)
                    .WithMany(u => u.Photos)
                    .HasForeignKey(p => p.AlbumID)
                    .OnDelete(DeleteBehavior.SetNull);

            modelBuilder.Entity<Photo>()
                .ToTable("Photos")
                .HasOne(p => p.User)
                    .WithMany(u => u.Photos)
                    .HasForeignKey(p => p.UserID);


        }
    }
}
