import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BookService,
  CreateBook
} from '../../../services/book.service';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent implements OnInit {

  book: CreateBook = {
    title: '',
    author: '',
    publishedDate: ''
  };

  isEditMode = false;
  bookId: number | null = null;

  message = '';
  errorMessage = '';

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEditMode = true;
      this.bookId = Number(id);
      this.loadBook(this.bookId);
    }
  }

  loadBook(id: number): void {
    this.bookService.getBook(id).subscribe({
      next: (book) => {
        this.book = {
          title: book.title,
          author: book.author,
          publishedDate: book.publishedDate.substring(0, 10)
        };
      },
      error: (error) => {
        console.error('Could not load book', error);
        this.errorMessage = 'Kunde inte hämta boken.';
      }
    });
  }

  saveBook(bookForm: NgForm): void {
    this.message = '';
    this.errorMessage = '';
    if (bookForm.invalid) {
      this.errorMessage = 'Vänligen fyll i alla obligatoriska fält.';
      return;
    }

    if (this.isEditMode && this.bookId !== null) {
      this.bookService.updateBook(
        this.bookId,
        this.book
      ).subscribe({
        next: () => {
          this.router.navigate(['/books']);
        },
        error: (error) => {
          console.error('Could not update book', error);
          this.errorMessage = 'Kunde inte uppdatera boken.';
        }
      });

      return;
    }

    this.bookService.createBook(this.book).subscribe({
      next: () => {
        this.router.navigate(['/books']);
      },
      error: (error) => {
        console.error('Could not create book', error);
        this.errorMessage = 'Kunde inte skapa boken.';
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/books']);
  }
}
