import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import {
  Book,
  BookService
} from '../../../services/book.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  message = '';
  errorMessage = '';

  constructor(
    private bookService: BookService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (books) => {
        this.books = books;
      },
      error: (error) => {
        console.error('Could not load books', error);
        this.errorMessage = 'Kunde inte hämta böcker.';
      }
    });
  }

  addBook(): void {
    this.router.navigate(['/books/new']);
  }

  editBook(id: number): void {
    this.router.navigate(['/books/edit', id]);
  }

  deleteBook(id: number): void {
    this.message = '';
    this.errorMessage = '';

    this.bookService.deleteBook(id).subscribe({
      next: () => {
        this.message = 'Boken togs bort!';
        this.loadBooks();
      },
      error: (error) => {
        console.error('Could not delete book', error);
        this.errorMessage = 'Kunde inte ta bort boken.';
      }
    });
  }
}
