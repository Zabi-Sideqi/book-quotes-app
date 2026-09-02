using System.Security.Claims;
using BookQuotes.Api.Data;
using BookQuotes.Api.DTOs;
using BookQuotes.Api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookQuotes.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class QuotesController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public QuotesController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<QuoteDto>>> GetQuotes()
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

        var quotes = await _context.Quotes
            .Where(q => q.UserId == userId)
            .Select(q => new QuoteDto
            {
                Id = q.Id,
                Text = q.Text
            })
            .ToListAsync();

        return Ok(quotes);
    }

    [HttpPost]
    public async Task<ActionResult<QuoteDto>> CreateQuote(CreateQuoteDto dto)
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

        if (string.IsNullOrEmpty(userId))
        {
            return Unauthorized();
        }

        var quoteCount = await _context.Quotes
            .CountAsync(q => q.UserId == userId);

        if (quoteCount >= 5)
        {
            return BadRequest("You can have maximum 5 quotes.");
        }

        var quote = new Quote
        {
            Text = dto.Text,
            UserId = userId
        };

        _context.Quotes.Add(quote);
        await _context.SaveChangesAsync();

        var quoteDto = new QuoteDto
        {
            Id = quote.Id,
            Text = quote.Text
        };

        return CreatedAtAction(
            nameof(GetQuote),
            new { id = quote.Id },
            quoteDto);
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<QuoteDto>> GetQuote(int id)
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

        var quote = await _context.Quotes
            .Where(q => q.Id == id && q.UserId == userId)
            .Select(q => new QuoteDto
            {
                Id = q.Id,
                Text = q.Text
            })
            .FirstOrDefaultAsync();

        if (quote == null)
        {
            return NotFound();
        }

        return Ok(quote);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> UpdateQuote(
        int id,
        CreateQuoteDto dto)
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

        var quote = await _context.Quotes
            .FirstOrDefaultAsync(q =>
                q.Id == id &&
                q.UserId == userId);

        if (quote == null)
        {
            return NotFound();
        }

        quote.Text = dto.Text;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteQuote(int id)
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

        var quote = await _context.Quotes
            .FirstOrDefaultAsync(q =>
                q.Id == id &&
                q.UserId == userId);

        if (quote == null)
        {
            return NotFound();
        }

        _context.Quotes.Remove(quote);

        await _context.SaveChangesAsync();

        return NoContent();
    }
}