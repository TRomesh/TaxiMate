import {
  GET_USERS,
  ERROR_GET_USERS,
  GET_USER_DETAILS,
  ERROR_GET_USER_DETAILS,
  UPDATE_USER_DETAILS,
  ERROR_UPDATE_USER_DETAILS
} from "../constants/user";

function GetUser(data) {
  return {
    type: GET_USERS,
    data
  };
}

function ErrorGetUser() {
  return {
    type: ERROR_GET_USERS
  };
}

function GetUserDetails(data) {
  return {
    type: GET_USER_DETAILS,
    data
  };
}

function ErrorGetUserDetails() {
  return {
    type: ERROR_GET_USER_DETAILS
  };
}

function UpdateUserDetails(data) {
  return {
    type: UPDATE_USER_DETAILS,
    data
  };
}

function ErrorUpdateUserDetails() {
  return {
    type: ERROR_UPDATE_USER_DETAILS
  };
}

export const Register = data => {};

export const Login = data => {};
