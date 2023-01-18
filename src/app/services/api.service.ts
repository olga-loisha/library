import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<number> {
    const url = '/users/authenticate';
    const body = { username, password };

    return this.http.post<number>(url, body);
    /*.pipe(
      map((userId: number) => userId)
    )*/
  }
}
