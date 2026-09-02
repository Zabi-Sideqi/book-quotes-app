import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BooksComponent } from './pages/books/books.component';
import { RegisterComponent } from './pages/register/register.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'quotes',
    component: QuotesComponent
  }
];
