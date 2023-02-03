import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, of, map, catchError } from 'rxjs';

import { ApiService } from '../../services/api.service';
import * as BooksActions from '../actions/books.actions';
import { Book } from '../../models/Book';

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}

  // @ts-ignore
  getBooks$ = createEffect(() => this.actions$.pipe(
    ofType(BooksActions.getBooks),
    exhaustMap(action => {
      return this.apiService.getBooks()
        .pipe(
          map((books: Book[]) => BooksActions.getBooksSuccess({ books })),
          catchError((error) => of(BooksActions.getBooksFail({ errorMessage: error.error.message })))
        );
    })
  ));
}
