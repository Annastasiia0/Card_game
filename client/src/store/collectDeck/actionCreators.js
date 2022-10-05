import {ADD_CARD_TO_COLLECT,REMOVE_CARD_TO_COLLECT,INIT_COLLECTION} from "./actionType";

export function addCardToCollect(payload) {
    return { type: ADD_CARD_TO_COLLECT,payload}
}

export function removeCardToCollect(payload) {
    return { type: REMOVE_CARD_TO_COLLECT,payload}
}

export function initCollection(payload) {
    return { type: INIT_COLLECTION,payload}
}
