import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../../models/Book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  selectedBook$: Observable<Book | null> | undefined;
  router: any;
  books: any

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.selectedBook$ = this.booksService.getSelectedBook();
  }
}
