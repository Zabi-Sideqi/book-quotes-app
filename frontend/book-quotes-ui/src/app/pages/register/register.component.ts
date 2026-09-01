
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  username = '';
  password = '';
  errorMessage = '';
  successMessage = '';

  private apiUrl = 'http://localhost:5000/api/Auth';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  register(): void {
    this.errorMessage = '';
    this.successMessage = '';

    const registerData = {
      username: this.username,
      password: this.password
    };

    this.http.post(
      `${this.apiUrl}/register`,
      registerData,
      { responseType: 'text' }
    ).subscribe({
      next: (response) => {
        console.log('Register successful:', response);
        this.successMessage = 'Registrering lyckades!';

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);
      },
      error: (error) => {
        console.log('Register error:', error);
        this.errorMessage = error.error || 'Kunde inte registrera användaren.';
      }
    });
  }
}
