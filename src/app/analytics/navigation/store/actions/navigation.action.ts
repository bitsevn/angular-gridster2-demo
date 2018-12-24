import { Action } from "@ngrx/store";
import { Client } from "../reducers";

export const LOAD_CLIENTS = "[Navigation] Load Clients";
export const LOAD_CLIENTS_FAIL = "[Navigation] Load Clients Fail";
export const LOAD_CLIENTS_SUCCESS = "[Navigation] Load Clients Success";

export class LoadClientsAction implements Action {
  readonly type = LOAD_CLIENTS;
}

export class LoadClientsFailAction implements Action {
  readonly type = LOAD_CLIENTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadClientsSuccessAction implements Action {
  readonly type = LOAD_CLIENTS_SUCCESS;
  constructor(public payload: Client[]) {}
}

export type LoadClientsActions =
  | LoadClientsAction
  | LoadClientsFailAction
  | LoadClientsSuccessAction;
