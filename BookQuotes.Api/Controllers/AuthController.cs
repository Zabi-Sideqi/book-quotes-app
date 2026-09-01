using BookQuotes.Api.Data;
using BookQuotes.Api.DTOs;
using BookQuotes.Api.Models;
using BookQuotes.Api.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace BookQuotes.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly PasswordHasher<User> _passwordHasher;
    private readonly JwtService _jwtService;

    public AuthController(ApplicationDbContext context, JwtService jwtService)
    {
        _context = context;
        _passwordHasher = new PasswordHasher<User>();
        _jwtService = jwtService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterDto dto)
    {
        if (await _context.Users.AnyAsync(u => u.Username == dto.Username))
        {
            return BadRequest("Username already exists.");
        }

        var user = new User
        {
            Username = dto.Username
        };

        user.PasswordHash =
            _passwordHasher.HashPassword(user, dto.Password);

        _context.Users.Add(user);

        await _context.SaveChangesAsync();

        return Ok("User registered successfully.");
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto dto)
    {
        var user = await _context.Users
            .FirstOrDefaultAsync(u => u.Username == dto.Username);

        if (user == null)
        {
            return Unauthorized("Invalid username or password.");
        }

        var result = _passwordHasher.VerifyHashedPassword(
            user,
            user.PasswordHash,
            dto.Password) == PasswordVerificationResult.Success;

        if (!result)
        {
            return Unauthorized("Invalid username or password.");
        }

        var token = _jwtService.GenerateToken(user.Id, user.Username);

        return Ok(new { Token = token });
    }

    [Authorize]
    [HttpGet("me")]
    public IActionResult Me()
    {
        return Ok(new
        {
            UserId = User.FindFirstValue(ClaimTypes.NameIdentifier),
            Username = User.Identity?.Name
        });
    }
}