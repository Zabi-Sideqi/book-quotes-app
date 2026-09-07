# Book & Quotes App

Book & Quotes App is a full-stack web application where users can manage books and their own quotes.

The project was developed as part of a technical test for a LIA internship. The main focus of the project is to demonstrate how a modern Angular frontend can communicate with a .NET Web API and a SQL database.

## Live Application

The application is deployed and available online:

https://book-quotes-app-kappa.vercel.app

## GitHub Repository

https://github.com/Zabi-Sideqi/book-quotes-app

---

## Features

### Authentication

- User registration
- User login
- JWT-based authentication
- Protected pages for authenticated users
- Logout functionality
- Authentication state handling

### Books

- View all books
- Create a new book
- Edit an existing book
- Delete a book
- View book information

### Quotes

- View personal quotes
- Create a quote
- Edit a quote
- Delete a quote
- Quotes are connected to the authenticated user

### User Interface

- Responsive design
- Desktop, tablet and mobile support
- Bootstrap-based layout
- Font Awesome icons
- Light and dark mode
- Form validation
- Loading feedback during login and other operations
- Error messages when an operation fails

---

## Technologies

### Frontend

- Angular 20
- TypeScript
- SCSS
- Bootstrap
- Font Awesome
- Angular Router
- Angular Forms
- HTTP Client

### Backend

- .NET 9
- C#
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server / Azure SQL
- JWT Authentication

### Hosting

- Frontend: Vercel
- Backend: Microsoft Azure
- Database: Azure SQL Database

---

## Project Structure

```text
BookQuotes/
│
├── BookQuotes.Api/
│   │
│   ├── Controllers/
│   ├── Data/
│   ├── Models/
│   ├── Services/
│   ├── Properties/
│   │
│   ├── Program.cs
│   ├── appsettings.json
│   └── BookQuotes.Api.csproj
│
├── frontend/
│   │
│   └── book-quotes-ui/
│       │
│       ├── public/
│       ├── src/
│       │   └── app/
│       │       ├── guards/
│       │       ├── interceptors/
│       │       ├── pages/
│       │       │   ├── books/
│       │       │   ├── login/
│       │       │   ├── quotes/
│       │       │   └── register/
│       │       ├── app.config.ts
│       │       ├── app.routes.ts
│       │       └── app.ts
│       │
│       ├── angular.json
│       ├── package.json
│       └── package-lock.json
│
├── BookQuotes.slnx
├── .gitignore
└── README.md
```

---

## How the Application Works

The application consists of three main parts:

### Angular Frontend

The frontend is responsible for the user interface and communication with the backend API.

Angular handles:

- Routing
- Forms
- Validation
- Authentication state
- API requests
- Displaying books and quotes
- Responsive UI

### ASP.NET Core Web API

The backend provides the REST API used by the Angular application.

The API handles:

- User registration
- User authentication
- JWT token generation
- Book CRUD operations
- Quote CRUD operations
- Authorization
- Database communication

### SQL Database

Entity Framework Core is used to communicate with the SQL database.

The database stores information such as:

- Users
- Books
- Quotes
- Relationships between users and their data

---

## Authentication

Authentication is handled using JWT tokens.

When a user logs in successfully:

1. The Angular application sends the username and password to the API.
2. The API validates the credentials.
3. The API creates a JWT token.
4. The token is returned to the frontend.
5. The frontend stores the token locally.
6. The token is sent with protected API requests.
7. The API validates the token before allowing access to protected resources.

The frontend also uses an HTTP interceptor to handle authenticated API requests.

---

## Running the Project Locally

### Requirements

Before running the project locally, make sure you have:

- .NET 9 SDK
- Node.js
- npm
- Angular CLI
- SQL Server or a compatible SQL Server database

---

## Running the Backend

Open a terminal and navigate to the API project:

```powershell
cd BookQuotes.Api
```

Restore the .NET dependencies:

```powershell
dotnet restore
```

Build the project:

```powershell
dotnet build
```

Start the API:

```powershell
dotnet run
```

The API will start on the development URL shown in the terminal.

---

## Running the Frontend

Open another terminal and navigate to the Angular application:

```powershell
cd frontend/book-quotes-ui
```

Install the required packages:

```powershell
npm install
```

Start the Angular development server:

```powershell
ng serve
```

The application will normally be available at:

```text
http://localhost:4200
```

---

## Database

The backend uses Entity Framework Core for database access.

Before running the backend locally, make sure the database connection is correctly configured.

The connection string should be configured for the local development environment and should not contain sensitive credentials in source control.

If migrations are required, they can be applied using:

```powershell
dotnet ef database update
```

---

## Development

The project was developed incrementally with the goal of keeping the frontend, backend and database responsibilities separated.

The frontend communicates with the backend through HTTP requests to the REST API.

The backend is responsible for business logic, authentication, authorization and database operations.

---

## Error Handling

The application includes basic error handling for common situations such as:

- Invalid login credentials
- Missing required form fields
- Failed API requests
- Unauthorized requests
- Invalid user input

Login also provides visual feedback while waiting for the API response so that the user knows that the request is being processed.

---

## Responsive Design

The application is designed to work on different screen sizes.

The layout has been tested with:

- Desktop
- Tablet
- Mobile

Bootstrap is used together with custom SCSS/CSS to handle the responsive layout and styling.

---

## Main Application Flow

A typical user flow is:

```text
Register
   ↓
Login
   ↓
Receive JWT token
   ↓
Books
   ↓
Create / Edit / Delete books
   ↓
My Quotes
   ↓
Create / Edit / Delete quotes
```

---

## Project Goals

The main goals of the project were to demonstrate:

- Full-stack development
- REST API development
- Angular application development
- C# and ASP.NET Core
- Entity Framework Core
- SQL database integration
- JWT authentication
- CRUD operations
- API communication
- Responsive UI development
- Basic error handling and validation
- Deployment of a full-stack application

---

## Deployment

The frontend is deployed as a web application and the backend and database are hosted using Microsoft Azure.

The deployed application can be accessed from the Live Application link at the top of this README.

---

## Notes

This project was created as part of a technical test for a LIA internship.

The purpose of the project is to demonstrate my ability to learn, implement and connect different parts of a full-stack application rather than to represent a production-ready commercial system.


