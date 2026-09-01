using Microsoft.EntityFrameworkCore;
using BookQuotes.Api.Models;
namespace BookQuotes.Api.Data

{
    public class ApplicationDbContext : DbContext 
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Book> Books { get; set; } 
    }
}
