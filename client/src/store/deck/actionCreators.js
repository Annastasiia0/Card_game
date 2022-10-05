import {ADD_TO_DECK_FROM_SHOP,INIT_DECK} from "./actionType";

export function addToDeckFromShop(payload) {
    return { type: ADD_TO_DECK_FROM_SHOP,payload}
}

export function initDeck(payload) {
    return { type: INIT_DECK,payload}
}
