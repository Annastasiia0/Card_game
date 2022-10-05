import {INIT_CARDS} from "./actionType";


export default function cardReducer(state = {cards:[]}, action) {
    switch (action.type) {
        case INIT_CARDS:
            return {...state, cards: action.payload}
        default:
            return state
    }
}
