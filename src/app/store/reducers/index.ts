import * as fromRouter from '@ngrx/router-store';
import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';
import { RouterStateUrl } from '../../lib/models';

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<
  State,
  fromRouter.RouterAction<any, RouterStateUrl>
> = {
  router: fromRouter.routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];

const visitRouter = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('router');

export const activatedRoute = createSelector(visitRouter, r => r.state);
