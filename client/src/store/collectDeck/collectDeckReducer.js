import {ADD_CARD_TO_COLLECT,REMOVE_CARD_TO_COLLECT,INIT_COLLECTION} from "./actionType";


export default function collectionReducer(state = {collection:[]}, action) {
    switch (action.type) {
        case INIT_COLLECTION:
            return {...state, collection: action.payload}
        case ADD_CARD_TO_COLLECT:
            return {...state, collection: [...state.collection,action.payload]}
        case REMOVE_CARD_TO_COLLECT: {
            return {...state, collection: state.collection.filter(el=>el.id!==action.payload)}
        }
        default:
            return state
    }
}
