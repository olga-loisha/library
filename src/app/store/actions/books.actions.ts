import { createAction, props } from '@ngrx/store';

import { Book } from "../../models/Book";

export enum BooksActionTypes {
  GET_BOOKS = '[Books] Get Books',
  GET_BOOKS_SUCCESS = '[Books] Get Books Success',
  GET_BOOKS_FAIL = '[Books] Get Books Fail'
}

export const getBooks = createAction(
  BooksActionTypes.GET_BOOKS
);

export const getBooksSuccess = createAction(
  BooksActionTypes.GET_BOOKS_SUCCESS,
  props<{ books: Book[] }>()
);

export const getBooksFail = createAction(
  BooksActionTypes.GET_BOOKS_FAIL,
  props<{ errorMessage: string }>()
);
