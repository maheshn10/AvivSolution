using listingapi.Infrastructure.Database.Models;
using Microsoft.EntityFrameworkCore;

namespace listingapi.Infrastructure.Database
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }

        public virtual DbSet<Listing> Listings { get; set; }
    }
}
