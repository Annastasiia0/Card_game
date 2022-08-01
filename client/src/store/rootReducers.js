import {combineReducers} from 'redux'
import authReducer from './auth/authReducer'
import buyReducer from "./shop/buyReducer";
import deckReducer from "./deck/deckReducer";

export default combineReducers({
  auth: authReducer,
  shop: buyReducer,
  deck: deckReducer
})
