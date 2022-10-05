import { ACTIVE_DECK, CREATE_DECK, LOAD_MY_DECK } from "./actionsType";
import { ADD_TO_DECK_FROM_SHOP,INIT_DECK } from "./actionType";




export default function deckReducer(state = {deck:[], myDeck: []}, action) {
    switch (action.type) {
        case INIT_DECK:
            return {...state, deck: action.payload}
        case ADD_TO_DECK_FROM_SHOP:
            return {...state, deck: [...state.deck,action.payload]}
        case LOAD_MY_DECK: {
          return {...state, myDeck: action.payload }
        }
        case CREATE_DECK: {
          return {...state, myDeck: [...state.myDeck, action.payload] }
        }
        case ACTIVE_DECK: {
          return {...state, myDeck: state.myDeck.map((deck) => deck.id === action.payload.id ? {...deck, active: action.payload.active} : deck)}
        }
        default:
            return state
    }
}
