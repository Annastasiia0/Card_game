import { BUY_DECK } from "./actionType";




 export default function buyReducer(state = {shop:[]}, action) {
     switch (action.type) {
         case BUY_DECK:
             return {...state, shop: action.payload}
         default:
             return state
     }
 }
