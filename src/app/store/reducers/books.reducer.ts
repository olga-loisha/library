import { Action, createReducer, on } from '@ngrx/store';

import * as BooksActions from '../actions/books.actions';
import { Book } from '../../models/Book';

export interface BooksState {
  books: Book[] | null,
  errorMessage: string | null
}

export const booksState: BooksState = {
  books: null,
  errorMessage: null
};

export const reducer = createReducer(
  booksState,
  on(BooksActions.getBooksSuccess, (state, { books }) => ({...state, books: books, errorMessage: null})),
  on(BooksActions.getBooksFail, (state, { errorMessage}) => ({...state, errorMessage: errorMessage}))
)

// to make it compatible with AoT
export function booksReducer(
  state: BooksState | undefined,
  action: Action) {
  return reducer(state, action);
}
