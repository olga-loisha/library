import {Component, OnInit} from '@angular/core';
import {Book} from "../../models/Book";
import {Observable} from "rxjs";
import {BooksService} from "../../services/books.service";
import {select, Store} from "@ngrx/store";
import {selectAllBooks, selectBooksEntities} from "../../store/selectors/books.selector";
import {getCurrentRouteParams} from "../../store/selectors/router.selectors";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  selectedBook$: Observable<Book | null> | undefined;
  router: any;
  books: any

  constructor(private booksService: BooksService, private store: Store) {}

  ngOnInit(): void {
    this.selectedBook$ = this.booksService.getSelectedBook();
  }
}
