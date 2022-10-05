import {AUTH_LOGIN, AUTH_LOGOUT, AUTH_REG, INIT_USER, CHANGE_PHOTO, CHANGE_NAME, ADD_MONEY} from './actionType';

export function authLogin(payload) {
  return { type: AUTH_LOGIN, payload };
}

export function authReg(payload) {
  return { type: AUTH_REG, payload}
}

export function authLogout(payload) {
  return { type: AUTH_LOGOUT, payload}
}

export function initUser(payload) {
  return {type: INIT_USER, payload}
}

export function changeName(payload) {
  return {type: CHANGE_NAME, payload}
}

export function changePhoto(payload) {
  return {type: CHANGE_PHOTO, payload}
}

export function addMoney(payload) {
  return {type: ADD_MONEY, payload}
}
