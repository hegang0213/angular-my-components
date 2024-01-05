import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }
}
