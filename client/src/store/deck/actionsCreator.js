import { ACTIVE_DECK, LOAD_MY_DECK, CREATE_DECK } from "./actionsType";

export function deckLoad(payload) {
  return { type: LOAD_MY_DECK, payload };
}

export function deckChangeActive(payload) {
  return { type: ACTIVE_DECK, payload };
}

export function createDeck(payload) {
  return { type: CREATE_DECK, payload }
}
