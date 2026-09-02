import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  Quote,
  QuoteService,
  CreateQuote
} from '../../../services/quote.service';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [];

  newQuote: CreateQuote = {
    text: ''
  };

  editingQuoteId: number | null = null;

  editQuote: CreateQuote = {
    text: ''
  };

  message = '';
  errorMessage = '';

  constructor(private quoteService: QuoteService) {
  }

  ngOnInit(): void {
    this.loadQuotes();
  }

  loadQuotes(): void {
    this.quoteService.getQuotes().subscribe({
      next: (quotes) => {
        this.quotes = quotes;
      },
      error: (error) => {
        console.error('Could not load quotes', error);
        this.errorMessage = 'Kunde inte hämta citat.';
      }
    });
  }

  createQuote(): void {
    this.message = '';
    this.errorMessage = '';

    this.quoteService.createQuote(this.newQuote).subscribe({
      next: (quote) => {
        this.quotes.push(quote);

        this.newQuote = {
          text: ''
        };

        this.message = 'Citatet skapades!';
      },
      error: (error) => {
        console.error('Could not create quote', error);
        this.errorMessage =
          error.error || 'Kunde inte skapa citatet.';
      }
    });
  }

  startEdit(quote: Quote): void {
    this.editingQuoteId = quote.id;

    this.editQuote = {
      text: quote.text
    };
  }

  updateQuote(): void {
    if (this.editingQuoteId === null) {
      return;
    }

    this.quoteService.updateQuote(
      this.editingQuoteId,
      this.editQuote
    ).subscribe({
      next: () => {
        this.message = 'Citatet uppdaterades!';
        this.editingQuoteId = null;
        this.loadQuotes();
      },
      error: (error) => {
        console.error('Could not update quote', error);
        this.errorMessage =
          'Kunde inte uppdatera citatet.';
      }
    });
  }

  cancelEdit(): void {
    this.editingQuoteId = null;
  }

  deleteQuote(id: number): void {
    this.message = '';
    this.errorMessage = '';

    this.quoteService.deleteQuote(id).subscribe({
      next: () => {
        this.message = 'Citatet togs bort!';
        this.loadQuotes();
      },
      error: (error) => {
        console.error('Could not delete quote', error);
        this.errorMessage =
          'Kunde inte ta bort citatet.';
      }
    });
  }
}
