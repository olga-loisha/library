import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BooksState } from '../reducers/books.reducer';

export const getBooksState = createFeatureSelector<BooksState>('books');

export const getBooksFromStore = createSelector(
  getBooksState,
  (state: BooksState) => state.books
);

export const getBooksErrorMessage = createSelector(
  getBooksState,
  (state: BooksState) => state.errorMessage
);
