import { Action } from "@ngrx/store";
import { State } from "../reducers/";

export const APP_LOAD = "[Analytics] App Load";
export const APP_LOAD_FAIL = "[Analytics] All Load Fail";
export const APP_LOAD_SUCCESS = "[Analytics] App Load Success";

export class AppLoadAction implements Action {
  readonly type = APP_LOAD;
}

export class AppLoadFailAction implements Action {
  readonly type = APP_LOAD_FAIL;
  constructor(public payload: any) {}
}

export class AppLoadSuccessAction implements Action {
  readonly type = APP_LOAD_SUCCESS;
  constructor(public payload: State) {}
}

export type AppActions =
  | AppLoadAction
  | AppLoadFailAction
  | AppLoadSuccessAction;
