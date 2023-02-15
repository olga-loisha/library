import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectRouter = createFeatureSelector<fromRouter.RouterReducerState>('router')

export const getCurrentRouteParams = createSelector(
  selectRouter,
  // @ts-ignore
  (state: fromRouter.RouterReducerState) => state.state.params
);
