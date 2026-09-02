using System.ComponentModel.DataAnnotations;    
namespace BookQuotes.Api.DTOs
{
    public class CreateBookDto
    { 
        [Required]
        [StringLength(200)]
        public string Title { get; set; } = string.Empty;
        [Required]
        [StringLength(200)]
        public string Author { get; set; } = string.Empty;

        [Required]
        public DateTime PublishedDate { get; set; }
    }
}
