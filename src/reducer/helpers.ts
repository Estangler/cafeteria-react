import type {
  CartItem,
  AddItemAction,
  RemoveItemAction,
  DeleteItemAction,
} from "./types";

export function addItem(state: CartItem[], action: AddItemAction): CartItem[] {
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

export function removeItem(
  state: CartItem[],
  action: RemoveItemAction,
): CartItem[] {
  const itemExist = state.find((item) => item.id === action.payload.id);

  if (!itemExist) {
    return state;
  }
  if (itemExist.quantity === 1) {
    return state.filter((item) => item.id !== action.payload.id);
  }
  return state.map((item) =>
    item.id === action.payload.id
      ? { ...item, quantity: item.quantity - 1 }
      : item,
  );
}

export function deleteItem(
  state: CartItem[],
  action: DeleteItemAction,
): CartItem[] {
  return state.filter((item) => item.id !== action.payload.id);
}

export function clearCart() {
  return [];
}
