import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth-guard.service';
import { AuthComponent } from './components/auth/auth.component';
import { BooksComponent } from './components/books/books.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthLayoutComponent } from './components/layout/auth-layout/auth-layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [
  {
    path: '',                       // {1}
    component: LayoutComponent,
    canActivate: [AuthGuard],       // {2}
    children: [
      {
        path: 'books',
        component: BooksComponent   // {3}
      },
      {
        path: 'profile',
        component: ProfileComponent // {4}
      },
      {
        path: 'book/:id',
        component: BookComponent  // {5}
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent, // {6}
    children: [
      {
        path: 'login',
        component: AuthComponent   // {7}
      }
    ]
  },
  { path: '**', redirectTo: '/books' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // paramsInheritanceStrategy: 'always'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
