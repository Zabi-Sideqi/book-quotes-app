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

  editingBookId: number | null = null;

  editBook: CreateBook = {
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

  startEdit(book: Book): void {
    this.editingBookId = book.id;

    this.editBook = {
      title: book.title,
      author: book.author,
      publishedDate: book.publishedDate.substring(0, 10)
    };
  }

  updateBook(): void {
    if (this.editingBookId === null) {
      return;
    }

    this.bookService.updateBook(
      this.editingBookId,
      this.editBook
    ).subscribe({
      next: () => {
        this.message = 'Boken uppdaterades!';
        this.editingBookId = null;
        this.loadBooks();
      },
      error: (error) => {
        console.error('Could not update book', error);
        this.errorMessage = 'Kunde inte uppdatera boken.';
      }
    });
  }

  cancelEdit(): void {
    this.editingBookId = null;
  }
}
