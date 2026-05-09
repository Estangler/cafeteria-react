import { addItem, removeItem, deleteItem, clearCart } from "./helpers";
import type { CartItem, Action } from "./types";

export const INITIAL_STATE: CartItem[] = [];

export function reducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case "ADD_ITEM":
      return addItem(state, action);

    case "REMOVE_ITEM":
      return removeItem(state, action);

    case "DELETE_ITEM": {
      return deleteItem(state, action);
    }

    case "CLEAR_CART":
      return clearCart();

    default:
      return state;
  }
}
