import { createContext } from "react";
import type { Items } from "../data/items";
import type { CartItem } from "../reducer/types";

type CartContextType = {
  items: CartItem[];
  checkout: boolean;

  onAddItem: (item: Items) => void;
  onRemoveItem: (item: Items) => void;
  onDeleteItem: (id: Pick<Items, "id">) => void;
  onClearCart: () => void;
  onCheckout: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);
