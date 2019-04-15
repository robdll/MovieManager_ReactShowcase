
export const SIGN_UP_START = "auth/SIGN_UP_START";
export const SIGN_UP_SUCCESS = "auth/SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "auth/SIGN_UP_FAILURE";

export const SIGN_IN_START = "auth/SIGN_IN_START";
export const SIGN_IN_SUCCESS = "auth/SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "auth/SIGN_IN_FAILURE";

export const SIGN_OUT_START = "auth/SIGN_OUT_START";
export const SIGN_OUT_SUCCESS = "auth/SIGN_OUT_SUCCESS";
export const SIGN_OUT_FAILURE = "auth/SIGN_OUT_FAILURE";


export function signUpStart(payload) {
  return {
      type: SIGN_UP_START,
      payload
  };
}

export function signUpSuccess() {
  return {
      type: SIGN_UP_SUCCESS
  };
}

export function signUpFailure(err) {
  return {
      type: SIGN_UP_FAILURE,
      payload: err
  };
}

export function signInStart(payload) {
  return {
      type: SIGN_IN_START,
      payload
  };
}

export function signInSuccess() {
  return {
      type: SIGN_IN_SUCCESS
  };
}

export function signInFailure(err) {
  return {
      type: SIGN_IN_FAILURE,
      payload: err
  };
}

export function signOutStart(payload) {
  return {
      type: SIGN_OUT_START,
      payload
  };
}

export function signOutSuccess() {
  return {
      type: SIGN_OUT_SUCCESS
  };
}

export function signOutFailure(err) {
  return {
      type: SIGN_OUT_FAILURE,
      payload: err
  };
}