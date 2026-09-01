using Microsoft.EntityFrameworkCore;

namespace BookQuotes.Api.Models
{
    public class Quote
    {
        public int Id { get; set; }
        public string Text { get; set; } = string.Empty;
        public string UserID { get; set; } = string.Empty;



    }
}
