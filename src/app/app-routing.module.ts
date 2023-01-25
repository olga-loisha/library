import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import {BooksComponent} from './components/books/books.component';
import { AuthGuard } from './services/auth-guard.service';
import {LayoutComponent} from "./components/layout/layout.component";
import {AuthLayoutComponent} from "./components/layout/auth-layout/auth-layout.component";
import {ProfileComponent} from "./components/profile/profile.component";

const routes: Routes = [
  {
    path: '',                       // {1}
    component: LayoutComponent,
    canActivate: [AuthGuard],       // {2}
    children: [
      {
        path: '',
        component: BooksComponent   // {3}
      },
      {
        path: 'profile',
        component: ProfileComponent // {4}
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent, // {5}
    children: [
      {
        path: 'login',
        component: AuthComponent   // {6}
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
