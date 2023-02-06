import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromBooks from  '../reducers/books.reducer';

export const selectBooksState = createFeatureSelector<fromBooks.BooksState>('books');

export const selectAllBooks = createSelector(
  selectBooksState,
  fromBooks.selectAllBooks
);

export const getBooksErrorMessage = createSelector(
  selectBooksState,
  (state: fromBooks.BooksState) => state.errorMessage
);
