import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {Book} from '../../models/Book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() book: Book | undefined;

  constructor(private router: Router) {}

  onClick(bookId: number | undefined): void {
    this.router.navigate(['/book', bookId]);
  }
}
