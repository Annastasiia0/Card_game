import {FILTER_COLLECTION,INIT_COLLECTION} from "./actionType";

// export function addCardToCollect(payload) {
//     return { type: ADD_CARD_TO_COLLECT,payload}
// }
//
// export function removeCardToCollect(payload) {
//     return { type: REMOVE_CARD_TO_COLLECT,payload}
// }

export function initCollection(payload) {
    return { type: INIT_COLLECTION,payload}
}

export function filterCollection(payload) {
    return { type: FILTER_COLLECTION, payload };
}
