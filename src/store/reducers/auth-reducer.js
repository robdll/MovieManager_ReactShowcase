import { 
  SIGN_UP_START, 
  SIGN_UP_SUCCESS, 
  SIGN_UP_FAILURE,
  SIGN_IN_START, 
  SIGN_IN_SUCCESS, 
  SIGN_IN_FAILURE,
  SIGN_OUT_START, 
  SIGN_OUT_SUCCESS, 
  SIGN_OUT_FAILURE,
} from "../actions/auth-actions";

const initialState = {
  auth: false,
  fetching: false,
  error: undefined
};

export default function reducer(state = initialState, action = {}) {

  const newState = { ...state };

  switch (action.type) {
    case SIGN_UP_FAILURE:
    case SIGN_IN_FAILURE:
    case SIGN_OUT_FAILURE: {
      newState.fetching = false;
      newState.error = action.payload;
      return newState;
    }
    case SIGN_UP_START:
    case SIGN_IN_START:
    case SIGN_OUT_START: {
      newState.fetching = true;
      newState.error = undefined;
      return newState;
    }
    case SIGN_OUT_SUCCESS: {
      newState.auth = false;
      newState.fetching = false;
      newState.error = undefined;
      return newState;
    }
    case SIGN_UP_SUCCESS: 
    case SIGN_IN_SUCCESS: {
      newState.auth = true;
      newState.error = false;
      newState.fetching = false;
      return newState;
    }
    default: {
      return state;
    }
  }
}