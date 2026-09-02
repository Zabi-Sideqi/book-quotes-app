using System.ComponentModel.DataAnnotations;

namespace BookQuotes.Api.DTOs
{
    public class CreateQuoteDto
    {
        [Required]
        [StringLength(1000)]
        public string Text { get; set; } = string.Empty;
    }
}
