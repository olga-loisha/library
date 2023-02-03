import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { fakeBackendProvider } from './interceptors/fake-backend-interceptor';
import { authReducer } from './store/reducers/auth.reducer';
import { booksReducer } from './store/reducers/books.reducer';
import { AuthEffects } from './store/effects/auth.effects';
import { BooksEffects } from './store/effects/books.effects';
import { AuthComponent } from './components/auth/auth.component';
import { BooksComponent } from './components/books/books.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthLayoutComponent } from './components/layout/auth-layout/auth-layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BookCardComponent } from './components/book-card/book-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    BooksComponent,
    LayoutComponent,
    AuthLayoutComponent,
    ProfileComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ auth: authReducer, books: booksReducer },{}),
    EffectsModule.forRoot([AuthEffects, BooksEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    AppRoutingModule
  ],
  providers: [
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
