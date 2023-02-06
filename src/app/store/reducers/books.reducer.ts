import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as BooksActions from '../actions/books.actions';
import { Book } from '../../models/Book';

export interface BooksState extends EntityState<Book> {
  errorMessage: string | null
}

export const booksAdapter: EntityAdapter<Book> =
  createEntityAdapter<Book>();

export const booksState = booksAdapter.getInitialState({
  errorMessage: null
});

export const reducer = createReducer(
  booksState,
  on(BooksActions.getBooksSuccess, (state, { books }) => (booksAdapter.setAll(books, {...state, errorMessage: null}))),
  on(BooksActions.getBooksFail, (state, { errorMessage}) => (booksAdapter.removeAll({...state, errorMessage: errorMessage})))
)

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = booksAdapter.getSelectors();

// select the array of user ids
export const selectBooksIds = selectIds;

// select the dictionary of user entities
export const selectBooksEntities = selectEntities;

// select the array of users
export const selectAllBooks = selectAll;

// select the total user count
export const selectBooksTotal = selectTotal;

// to make it compatible with AoT
export function booksReducer(
  state: BooksState | undefined,
  action: Action) {
  return reducer(state, action);
}
