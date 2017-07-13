import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL
} from "../constants/user";

function SignIn(data) {
  return {
    type: SIGN_IN_SUCCESS,
    data
  };
}

function ErrorSignIn() {
  return {
    type: SIGN_IN_FAIL
  };
}

function SignUp(data) {
  return {
    type: SIGN_UP_SUCCESS,
    data
  };
}

function ErrorSignUp() {
  return {
    type: SIGN_UP_FAIL
  };
}

export const Register = data => {};

export const Login = data => {};
