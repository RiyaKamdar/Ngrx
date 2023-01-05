import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginUrl = "http://localhost:3000/api/login";

  

  constructor(private http: HttpClient) { }

  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user);
  }

  IsLogged() {
    return localStorage.getItem('token');
  }
  
}
