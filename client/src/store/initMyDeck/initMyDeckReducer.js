import {INIT_MY_DECK,ADD_CARD_TO_COLLECT,REMOVE_CARD_TO_COLLECT} from "./actionTypes";





export default function initMyDeckReducer(state = {myCreateDeck:[]}, action) {
    switch (action.type) {
        case INIT_MY_DECK:
            return {...state, myCreateDeck: action.payload}
        case ADD_CARD_TO_COLLECT:
            return {...state, myCreateDeck: [...state.myCreateDeck,action.payload]}
        case REMOVE_CARD_TO_COLLECT: {
            return {...state, myCreateDeck: state.myCreateDeck.filter(el => el.id != action.payload)}
        }
        default:
            return state
    }
}
