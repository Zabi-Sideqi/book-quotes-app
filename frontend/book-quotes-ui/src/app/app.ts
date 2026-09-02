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

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
