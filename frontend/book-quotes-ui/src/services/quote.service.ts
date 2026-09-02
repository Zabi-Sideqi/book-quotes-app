import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface Quote {
  id: number;
  text: string;
}

export interface CreateQuote {
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private apiUrl = `${environment.apiUrl}/Quotes`;

  constructor(private http: HttpClient) {
  }

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.apiUrl);
  }

  createQuote(quote: CreateQuote): Observable<Quote> {
    return this.http.post<Quote>(
      this.apiUrl,
      quote
    );
  }

  updateQuote(
    id: number,
    quote: CreateQuote
  ): Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/${id}`,
      quote
    );
  }

  deleteQuote(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );
  }
}
