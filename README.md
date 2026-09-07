# Book & Quotes App

A full-stack web application for managing books and quotes.

The application was developed as part of a technical test for an internship (LIA). The project demonstrates full-stack development using Angular, C#, ASP.NET Core Web API, Entity Framework Core and SQL Server.

## Features

- User registration
- User login
- JWT authentication
- View books
- Search for books
- Create new books
- Edit books
- Delete books
- View personal quotes
- Create quotes
- Edit quotes
- Delete quotes
- Responsive design
- Light and dark mode
- Loading indicator during login
- Error messages for failed requests
- Protected pages for authenticated users

## Technologies

### Frontend

- Angular 20
- TypeScript
- SCSS
- Bootstrap
- Font Awesome

### Backend

- .NET 9
- C#
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- JWT Authentication

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
│   ├── appsettings.json
│   └── BookQuotes.Api.csproj
│
├── frontend/
│   └── book-quotes-ui/
│       ├── src/
│       │   └── app/
│       │       ├── guards/
│       │       ├── interceptors/
│       │       ├── pages/
│       │       │   ├── books/
│       │       │   ├── login/
│       │       │   ├── quotes/
│       │       │   └── register/
│       │       └── ...
│       ├── public/
│       ├── angular.json
│       ├── package.json
│       └── package-lock.json
│
├── BookQuotes.slnx
├── .gitignore
└── README.md
```

## How to Run the Project

### Requirements

Before running the project, make sure you have installed:

- .NET 9 SDK
- Node.js
- Angular CLI
- SQL Server or access to the configured SQL Server database

### 1. Start the Backend

Open a terminal and navigate to the API project:

```bash
cd BookQuotes.Api
```

Restore the .NET packages:

```bash
dotnet restore
```

Start the API:

```bash
dotnet run
```

The API will start on the local development URL shown in the terminal.

### 2. Start the Frontend

Open another terminal and navigate to the Angular project:

```bash
cd frontend/book-quotes-ui
```

Install the required packages:

```bash
npm install
```

Start the Angular application:

```bash
ng serve
```

Open the application in your browser:

```text
http://localhost:4200
```

## Authentication

The application uses JWT authentication.

Users can register an account and then log in with their username and password.

After a successful login, the backend returns a JWT token. The frontend stores the token and uses it when making requests to protected API endpoints.

Protected routes are handled using Angular route guards.

## Database

The backend uses SQL Server together with Entity Framework Core.

Entity Framework Core is used to communicate with the database and manage the application's data.

Database migrations are used when database changes are made.

## API

The backend is built with ASP.NET Core Web API.

The API is responsible for:

- User authentication
- Books
- Quotes
- Database communication
- Validation
- Authorization

The Angular frontend communicates with the backend through HTTP requests.

## Frontend

The frontend is built with Angular 20 and TypeScript.

The application is divided into different pages and services to keep the code organized.

The frontend includes:

- Login page
- Registration page
- Books page
- Quotes page
- Navigation
- Authentication guard
- HTTP interceptor
- Responsive layout

## Responsive Design

The application is designed to work on different screen sizes, including:

- Desktop
- Tablet
- Mobile

Bootstrap is used together with custom SCSS for the layout and styling.

## Error Handling and Loading

The application displays error messages when login or other requests fail.

Loading indicators are also used during operations that may take some time, so the user can see that the application is processing the request.

## Azure Deployment

The application has also been deployed using Microsoft Azure.

The backend is hosted using Azure App Service and the database uses Azure SQL Database.

The Azure resources were configured with cost awareness in mind and the available free resources were used where possible.

## GitHub

The source code is available on GitHub:

https://github.com/Zabi-Sideqi/book-quotes-app

## Purpose of the Project

This project was created as part of a technical test for an internship (LIA).

The purpose of the project is to demonstrate practical knowledge of:

- Angular
- TypeScript
- C#
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- JWT authentication
- REST API
- Git and GitHub
- Azure

## Author

Zabi Sideqi