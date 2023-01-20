import {Action, createReducer, on} from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export interface AuthState {
  isLoggedIn: boolean,
  userId: number | null,
  loginErrorMessage: string | null,
  logoutErrorMessage: string | null
}

export const authState: AuthState = {
  isLoggedIn: false,
  userId: null,
  loginErrorMessage: null,
  logoutErrorMessage: null
};

export const reducer = createReducer(
  authState,
  on(AuthActions.loginSuccess, (state, { userId }) => ({ ...state, userId: userId, isLoggedIn: true })),
  on(AuthActions.loginFail, (state, { errorMessage }) => ({ ...state, loginErrorMessage: errorMessage })),
  on(AuthActions.logoutSuccess, state => ({ ...state, isLoggedIn: false })),
  on(AuthActions.logoutFail, (state, { errorMessage }) => ({ ...state, logoutErrorMessage: errorMessage })),
)

// to make it compatible with AoT
export function authReducer(
  state: AuthState | undefined,
  action: Action) {
  return reducer(state, action);
}
