import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): any {
    const url = '/users/authenticate';
    const body = { username, password };

    return this.http.post
  }
}
