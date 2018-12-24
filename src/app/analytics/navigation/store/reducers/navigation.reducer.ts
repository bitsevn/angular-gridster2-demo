import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromActions from "../actions";

export interface Client {
  id: number;
}

export interface ClientState {
  entities: { [id: number]: Client };
  loading: boolean;
  loaded: boolean;
}

export interface NavigationState {
  clients: ClientState;
}

export const initialState: ClientState = {
  entities: {},
  loading: false,
  loaded: false
};

export function reducer(
  state = initialState,
  action: fromActions.LoadClientsActions
) {
  switch (action.type) {
    case fromActions.LOAD_CLIENTS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromActions.LOAD_CLIENTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromActions.LOAD_CLIENTS_SUCCESS: {
      const clients = action.payload;
      const entities = clients.reduce(
        (entities: { [id: number]: Client }, client: Client) => {
          return {
            ...entities,
            [client.id]: client
          };
        },
        {
          ...state.entities
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }
  }
  return state;
}

export const getClientLoading = (state: ClientState) => state.loading;
export const getClientLoaded = (state: ClientState) => state.loaded;
export const getClientEntities = (state: ClientState) => state.entities;

export const getNavState = createFeatureSelector<NavigationState>("nav");
export const getClientState = createSelector(
  getNavState,
  (state: NavigationState) => state.clients
);

/* export const getAllClients = createSelector(
    getClientState,
  (state: NavigationState) => {
    return Object.keys(state.entities).map(key => state.entities[key]);
  }
);
 */
