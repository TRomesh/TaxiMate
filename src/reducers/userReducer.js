import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL
} from "../constants/user";

const initialState = {
  isError: false,
  redireact: false,
  error: "",
  fname: "",
  lname: ""
};

export default function User(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return Object.assign({}, state, { isError: false, redireact: true });

    case SIGN_UP_FAIL:
      return Object.assign({}, state, { isError: true, redireact: false });

    case SIGN_IN_SUCCESS:
      return Object.assign({}, state, { isError: false, redireact: true });

    case SIGN_IN_FAIL:
      return Object.assign({}, state, { isError: true, redireact: false });

    default:
      return state;
  }
}
