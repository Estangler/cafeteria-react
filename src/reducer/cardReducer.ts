import type { Items } from "../data/items";

export type CartItem = Items & {
  quantity: number;
};

export const INITIAL_STATE: CartItem[] = [];

type Action =
  | {
      type: "ADD_ITEM";
      payload: Items;
    }
  | { type: "REMOVE_ITEM"; payload: Items }
  | { type: "DELETE_ITEM"; payload: Pick<Items, "id"> }
  | { type: "CLEAR_CART" };

export function reducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case "ADD_ITEM": {
      const itemExist = state.find((item) => item.id === action.payload.id);

      if (itemExist) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "REMOVE_ITEM": {
      const itemExist = state.find((item) => item.id === action.payload.id);

      if (!itemExist) {
        return state;
      }

      if (itemExist.quantity === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      }

      if (itemExist) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }
      return state;
    }

    case "DELETE_ITEM": {
      return state.filter((item) => item.id !== action.payload.id);
    }

    case "CLEAR_CART":
      if (state.length === 0) {
        return state;
      }
      return [];

    default:
      return state;
  }
}
