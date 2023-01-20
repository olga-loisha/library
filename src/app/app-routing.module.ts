import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import {BooksComponent} from './components/books/books.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: BooksComponent, canActivate: [AuthGuard] },
  { path: 'login', component: AuthComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
