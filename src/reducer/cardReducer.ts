import type { Items } from "../data/items";

export type CartItem = Items & {
  quantity: number;
};

export const INITIAL_STATE: CartItem[] = [];

type Action =
  | {
      type: "ADD_ITEM";
      payload: CartItem;
    }
  | { type: "REMOVE_ITEM"; payload: number };

export function reducer(state: CartItem[], action: Action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...state, action.payload];
    }

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
