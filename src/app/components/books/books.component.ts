import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../../models/Book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books$: Observable<Book[] | null> | undefined;
  booksError$: Observable<string | null> | undefined;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooks();
    this.books$ = this.booksService.getBooksFromStore();
    this.booksError$ = this.booksService.getBooksError();
  }
}
