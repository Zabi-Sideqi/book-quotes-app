import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  login(form: NgForm): void {
    this.errorMessage = '';

    if (form.invalid) {
      this.errorMessage = 'Vänligen fyll i användarnamn och lösenord.';
      return;
    }

    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);

        window.dispatchEvent(new Event('authChanged'));

        console.log('Login successful');

        this.router.navigate(['/books']);
      },
      error: () => {
        this.errorMessage = 'Felaktigt användarnamn eller lösenord.';
      }
    });
  }
}
