import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Book,
  BookService,
  CreateBook
} from '../../../services/book.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  newBook: CreateBook = {
    title: '',
    author: '',
    publishedDate: ''
  };

  message = '';
  errorMessage = '';

  constructor(private bookService: BookService) {
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
      }
    });
  }

  createBook(): void {
    this.message = '';
    this.errorMessage = '';

    this.bookService.createBook(this.newBook).subscribe({
      next: (book) => {
        this.books.push(book);

        this.newBook = {
          title: '',
          author: '',
          publishedDate: ''
        };

        this.message = 'Boken skapades!';
      },
      error: (error) => {
        console.error('Could not create book', error);
        this.errorMessage = 'Kunde inte skapa boken.';
      }
    });
  }
}
