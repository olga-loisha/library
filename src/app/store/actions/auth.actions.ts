import { createAction, props } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[Authentication] Login',
  LOGIN_SUCCESS = '[Authentication] Login Success',
  LOGIN_FAIL = '[Authentication] Login Fail',
  LOGOUT = '[Authentication] Logout',
  LOGOUT_SUCCESS = '[Authentication] Logout Success',
  LOGOUT_FAIL = '[Authentication] Logout Fail'
}

export const login = createAction(
  AuthActionTypes.LOGIN,
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<{ userId: number }>()
);

export const loginFail = createAction(
  AuthActionTypes.LOGIN_FAIL,
  props<{ errorMessage: string }>()
);

export const logout = createAction(
  AuthActionTypes.LOGOUT,
);

export const logoutSuccess = createAction(
  AuthActionTypes.LOGOUT_SUCCESS
);

export const logoutFail = createAction(
  AuthActionTypes.LOGOUT_FAIL,
  props<{ errorMessage: string }>()
);
