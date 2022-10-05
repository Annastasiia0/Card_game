import {INIT_MY_DECK,ADD_CARD_TO_COLLECT,REMOVE_CARD_TO_COLLECT} from "./actionTypes";


export function initMyDeck(payload) {
    return { type: INIT_MY_DECK, payload };
}


export function addCardToCollect(payload) {
    return { type: ADD_CARD_TO_COLLECT,payload}
}

export function removeCardToCollect(payload) {
    return { type: REMOVE_CARD_TO_COLLECT,payload}
}
