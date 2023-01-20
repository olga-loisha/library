import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, of, map, catchError } from 'rxjs';

import { ApiService } from '../../services/api.service';
import * as AuthActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private router: Router
  ) {}

  // @ts-ignore
  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    exhaustMap(action => this.apiService.login(action.username, action.password)
      .pipe(
        map((userId: number) => {
          this.router.navigate(['']);
          return AuthActions.loginSuccess({userId: userId});
        }),
        catchError((error) => {
          return of(AuthActions.loginFail({errorMessage: error.error.message}));
        })
      ))
    )
  );
}
