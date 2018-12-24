import * as fromActions from "../actions";
import { state2 } from "src/store/app.state";

export interface State {
  loading: boolean;
  loaded: boolean;
}

export const initialState: State = {
  loading: false,
  loaded: false
};

export function reducer(state = initialState, action: fromActions.AppActions) {
  switch (action.type) {
    case fromActions.APP_LOAD: {
      return {
        ...state,
        loading: true
      };
    }

    case fromActions.APP_LOAD_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case fromActions.APP_LOAD_SUCCESS: {
      const payload = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
  }
  return state;
}
