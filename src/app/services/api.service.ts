import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from '../models/Book';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<number> {
    const url = '/users/authenticate';
    const body = { username, password };

    return this.http.post<number>(url, body);
  }

  logout(): Observable<void> {
    const url = '/logout';
    return this.http.post<void>(url, {});
  }

  getBooks(): Observable<Book[]> {
    const url = '/books';
    return this.http.get<Book[]>(url);
  }
}
