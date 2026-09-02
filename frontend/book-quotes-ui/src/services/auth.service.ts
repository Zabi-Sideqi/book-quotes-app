import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5000/api/Auth';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<LoginResponse> {
    const loginData: LoginRequest = {
      username: username,
      password: password
    };

    return this.http.post<LoginResponse>(
      `${this.apiUrl}/login`,
      loginData
    );
  }
  logout(): void {
    localStorage.removeItem('token');
  }
}
