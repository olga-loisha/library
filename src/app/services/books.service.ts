import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getBooks } from '../store/actions/books.actions';
import { getBooksErrorMessage, selectAllBooks, selectSelectedBook } from '../store/selectors/books.selector';
import { Book } from '../models/Book';

@Injectable({ providedIn: 'root' })
export class BooksService {
  constructor(private store: Store) {}

  getBooks(): void {
    this.store.dispatch(getBooks());
  }

  getBooksFromStore(): Observable<Book[] | null> {
    return this.store.pipe(select(selectAllBooks));
  }

  getBooksError(): Observable<string | null> {
    return this.store.pipe(select(getBooksErrorMessage));
  }

  getSelectedBook(): any {
    // @ts-ignore
    return this.store.pipe(select(selectSelectedBook))
  }
}
