# Book & Quotes App

A full-stack web application built with Angular and ASP.NET Core Web API.

The application allows users to register, log in, manage books and create
their own quotes.

This project was developed as part of a technical test for an internship (LIA).

## Features

- User registration and login
- JWT authentication
- View books
- Create, edit and delete books
- Search for books
- "My Quotes" page
- Create, edit and delete quotes
- Responsive design
- Light and dark mode
- Loading indicators and error messages

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

BookQuotes/
├── BookQuotes.Api/
│   ├── Controllers/
│   ├── Models/
│   ├── Data/
│   ├── Services/
│   └── Program.cs
│
├── frontend/
│   └── book-quotes-ui/
│       ├── src/
│       ├── public/
│       └── package.json
│
├── BookQuotes.slnx
└── README.md

## How to Run the Project

### Backend

Navigate to the API project:

cd BookQuotes.Api

Run the API:

dotnet run

### Frontend

Navigate to:

cd frontend/book-quotes-ui

Install dependencies:

npm install

Start Angular:

ng serve

The application will be available at:

http://localhost:4200

## Database

The application uses SQL Server with Entity Framework Core.

Database migrations are used to create and update the database.

## Authentication

Users can register and log in to the application.

After a successful login, the API returns a JWT token which is used
to authenticate protected requests.

## Deployment

The application has also been deployed using Microsoft Azure.

The backend uses Azure App Service and Azure SQL Database.

## GitHub

Repository:

https://github.com/Zabi-Sideqi/book-quotes-app

## Purpose

This project was created as part of an internship technical test and
demonstrates my experience with Angular, C#, ASP.NET Core Web API,
Entity Framework Core and SQL Server.