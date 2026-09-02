
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  username = '';
  password = '';
  errorMessage = '';
  successMessage = '';

  private apiUrl = `${environment.apiUrl}/Auth`;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  register(form: NgForm): void {
    this.errorMessage = '';
    this.successMessage = '';

    const registerData = {
      username: this.username,
      password: this.password
    };
    if (form.invalid) {
      this.errorMessage = 'Vänligen fyll i användarnamn och lösenord.';
      return;
    }

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

