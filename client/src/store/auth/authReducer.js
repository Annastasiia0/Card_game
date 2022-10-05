import {AUTH_LOGIN, AUTH_LOGOUT, AUTH_REG, INIT_USER,CHANGE_PHOTO} from "./actionType";
import {BUY_DECK} from "../shop/actionType";


const initialState = { user: {} };

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN: {
      return {...state, user: action.payload }
    }
    case AUTH_REG: {
      return {...state, user: action.payload }
    }
    case AUTH_LOGOUT: {
      return {...state, user: {} }
    }
    case INIT_USER: {
      return {...state, user: action.payload}
    }
    case BUY_DECK:
      return {...state, user: {...state.user,coins:state.user.coins-100}}
    case CHANGE_PHOTO:
      return {...state, user: {...state.user,photo:action.payload}}

    default: return state
  }
}
