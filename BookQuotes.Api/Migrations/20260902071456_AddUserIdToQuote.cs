using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookQuotes.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddUserIdToQuote : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserID",
                table: "Quotes",
                newName: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Quotes",
                newName: "UserID");
        }
    }
}
