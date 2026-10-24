# Book & Quotes App

A full-stack web application for managing books and personal quotes. The project demonstrates a complete workflow across an Angular frontend, a REST API built with ASP.NET Core, and a SQL Server database.

## Features

- User registration and login
- JWT-based authentication
- Browse and search books
- Create, edit, and delete books
- Create, view, edit, and delete personal quotes
- Protected pages for authenticated users
- Angular route guards and HTTP interceptor
- Responsive interface
- Light and dark mode
- Loading indicators and user-friendly error messages

## Tech Stack

| Area | Technologies |
| --- | --- |
| Frontend | Angular 20, TypeScript, SCSS, Bootstrap |
| Backend | C#, .NET 9, ASP.NET Core Web API |
| Data access | Entity Framework Core |
| Database | SQL Server |
| Authentication | JWT |
| UI icons | Font Awesome |
| Cloud | Azure App Service, Azure SQL Database |

## Architecture

The application is separated into a frontend and backend:

```text
Angular 20 frontend
       |
       | HTTP requests with JWT
       v
ASP.NET Core Web API
       |
       v
Entity Framework Core
       |
       v
SQL Server
```

The frontend communicates with the API through HTTP requests. The API handles authentication, validation, book and quote operations, and database access. Protected frontend routes use route guards, while an HTTP interceptor supports authenticated requests.

## Project Structure

```text
BookQuotes/
├── BookQuotes.Api/
│   ├── Controllers/
│   ├── Models/
│   ├── Data/
│   ├── Services/
│   ├── Properties/
│   ├── Program.cs
│   └── BookQuotes.Api.csproj
├── frontend/
│   └── book-quotes-ui/
│       └── src/app/
│           ├── guards/
│           ├── interceptors/
│           └── pages/
│               ├── books/
│               ├── login/
│               ├── quotes/
│               └── register/
├── BookQuotes.slnx
└── README.md
```

## Run Locally

### Prerequisites

- .NET 9 SDK
- Node.js and npm
- Angular CLI
- SQL Server or access to a configured SQL Server database

### 1. Start the API

Open a terminal in the API directory:

```bash
cd BookQuotes.Api
dotnet restore
dotnet run
```

Use the local API URL printed in the terminal. Configure the database connection string for your local environment before running the application.

### 2. Start the Angular frontend

Open a second terminal:

```bash
cd frontend/book-quotes-ui
npm install
ng serve
```

Then open [http://localhost:4200](http://localhost:4200).

## Authentication and Data

Users can register and log in. After a successful login, the API issues a JWT that the frontend sends with requests to protected endpoints. The API uses Entity Framework Core to work with SQL Server, and database schema changes are managed with EF Core migrations.

## Azure

The application has been configured for deployment with Azure App Service and Azure SQL Database. Keep secrets and environment-specific connection strings out of source control; configure them through local settings or the deployment environment.

## What This Project Demonstrates

- Building a full-stack application with Angular and ASP.NET Core
- Designing and consuming REST API endpoints
- Implementing JWT authentication and protected routes
- Working with relational data through Entity Framework Core
- Organizing frontend pages, guards, and HTTP interceptors
- Handling loading states and API errors
- Preparing an application for cloud deployment

## Source Code

[View the repository on GitHub](https://github.com/Zabi-Sideqi/book-quotes-app)

## Author

Zabi Sideqi
