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
public class BooksController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public BooksController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<BookDto>>> GetBooks()
    {
        var books = await _context.Books
            .Select(book => new BookDto
            {
                Id = book.Id,
                Title = book.Title,
                Author = book.Author,
                PublishedDate = book.PublishedDate
            })
            .ToListAsync();

        return Ok(books);
    }
    [HttpPost]
    public async Task<ActionResult<BookDto>> CreateBook(CreateBookDto dto)
    {
        var book = new Book
        {
            Title = dto.Title,
            Author = dto.Author,
            PublishedDate = dto.PublishedDate
        };

        _context.Books.Add(book);

        await _context.SaveChangesAsync();

        var bookDto = new BookDto
        {
            Id = book.Id,
            Title = book.Title,
            Author = book.Author,
            PublishedDate = book.PublishedDate
        };

        return CreatedAtAction(
            nameof(GetBook),
            new { id = book.Id },
            bookDto);
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<BookDto>> GetBook(int id)
    {
        var book = await _context.Books
            .Where(book => book.Id == id)
            .Select(book => new BookDto
            {
                Id = book.Id,
                Title = book.Title,
                Author = book.Author,
                PublishedDate = book.PublishedDate
            })
            .FirstOrDefaultAsync();

        if (book == null)
        {
            return NotFound();
        }

        return Ok(book);
    }

    [HttpPut("{id:int}")]

    public async Task<IActionResult> UpdateBook(int id, CreateBookDto dto)
    {
        var book = await _context.Books.FindAsync(id);
        
        if (book == null)
        {
            return NotFound();
        }
        book.Title = dto.Title;
        book.Author = dto.Author;
        book.PublishedDate = dto.PublishedDate;

        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteBook(int id)
    {
        var book = await _context.Books.FindAsync(id);

        if (book == null)
        {
            return NotFound();
        }
        _context.Books.Remove(book);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}