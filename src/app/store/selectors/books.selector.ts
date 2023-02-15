import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromBooks from  '../reducers/books.reducer';
import {getCurrentRouteParams} from './router.selectors';

export const selectBooksState = createFeatureSelector<fromBooks.BooksState>('books');

export const selectAllBooks = createSelector(
  selectBooksState,
  fromBooks.selectAllBooks
);

export const selectBooksEntities = createSelector(
  selectBooksState,
  fromBooks.selectBooksEntities
);


export const selectSelectedBook = createSelector(
  selectBooksEntities,
  getCurrentRouteParams,
  (books, params) => {
    const id = params['id'];
    return books[id]
  }
);

export const getBooksErrorMessage = createSelector(
  selectBooksState,
  (state: fromBooks.BooksState) => state.errorMessage
);
