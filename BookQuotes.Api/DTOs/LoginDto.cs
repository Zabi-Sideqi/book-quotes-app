using System.ComponentModel.DataAnnotations;
namespace BookQuotes.Api.DTOs
{
    public class LoginDto
    {
        [Required]
        [StringLength(50)]
        public string Username { get; set; } = string.Empty;
        [Required]
        [StringLength(100, MinimumLength = 5)]
        public string Password { get; set; } = string.Empty;
    }
}
