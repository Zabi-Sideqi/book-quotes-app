import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BooksComponent } from './pages/books/books.component';
import { RegisterComponent } from './pages/register/register.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { authGuard } from './guards/auth.guard';
import { BookFormComponent } from './pages/books/book-form.component';
export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'books',
    component: BooksComponent,
    canActivate: [authGuard]
  },
  {
    path: 'books/new',
    component: BookFormComponent,
    canActivate: [authGuard]
  },
  {
    path: 'books/edit/:id',
    component: BookFormComponent,
    canActivate: [authGuard]
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
    component: QuotesComponent,
    canActivate: [authGuard]
  },

];
