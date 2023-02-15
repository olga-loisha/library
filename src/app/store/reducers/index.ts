import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import * as fromRouter from '@ngrx/router-store';

import { authReducer, AuthState } from './auth.reducer';
import { booksReducer, BooksState } from './books.reducer';

export interface StoreRootState {
  auth: AuthState,
  books: BooksState,
  router: fromRouter.RouterReducerState<any>;
}

export const reducers: ActionReducerMap<StoreRootState> = {
  auth: authReducer,
  books: booksReducer,
  router: routerReducer
};
