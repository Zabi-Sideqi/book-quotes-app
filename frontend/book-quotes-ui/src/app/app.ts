import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('book-quotes-ui');

  isDarkMode = false;
  menuOpen = false;
  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.isLoggedIn = !!localStorage.getItem('token');

    window.addEventListener('authChanged', () => {
      this.isLoggedIn = !!localStorage.getItem('token');
    });
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.menuOpen = false;
    this.router.navigate(['/login']);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    document.documentElement.setAttribute(
      'data-bs-theme',
      this.isDarkMode ? 'dark' : 'light'
    );
  }
}
