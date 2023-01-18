import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { User } from '../models/User';

const users: User[] = [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url, method, headers, body} = request;

    // wrap in delayed observable to simulate server api call
    return of<null>(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        /*
        case url.match(/\/users\/\d+$/) && method === 'GET':
          return getUserById();
        case url.match(/\/users\/\d+$/) && method === 'PUT':
          return updateUser();
        case url.match(/\/users\/\d+$/\/book\/\d+$) && method === 'GET':
          return deleteFromFavorite();
        case url.match(/\/users\/\d+$/\/book\/\d+$) && method === 'POST':
          return addToFavorite();
        case url.match(/\/users\/\d+$/\/book\/\d+$) && method === 'DELETE':
          return deleteFromFavorite();
        case url.endsWith('/books') && method === 'GET':
          return getBooks();
        case url.match(/\/books\/\d+$/) && method === 'GET':
          return getBookById();
        case url.endsWith('/books/add') && method === 'POST':
          return addBook();
        case url.endsWith('/logout') && method === 'POST':
          return logout();
        */
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    function authenticate() {
      const { username, password } = body;
      const user = users.find(x => x.username === username && x.password === password);

      if (!user) {
        return error('Username or password is incorrect');
      }

      localStorage.setItem('token', 'fake-jwt-token');

      return ok({
        userId: user.id
      })
    }

    // helper functions

    function ok(body?: any) {
      return of(new HttpResponse({ status: 200, body }))
    }

    function error(message: string) {
      return throwError(() => ({ error: { message } }));
    }

    // TODO: move logic to guard
    function unauthorized() {
      return throwError(() => ({ status: 401, error: { message: 'Unauthorised' } }));
    }

    // TODO: move logic to guard
    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};