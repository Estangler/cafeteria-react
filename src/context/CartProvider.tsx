import { type ReactNode, useEffect, useReducer, useState } from "react";
import { INITIAL_STATE, reducer } from "../reducer/cardReducer";
import type { Items } from "../data/items";
import { CartContext } from "./cartContext";

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [checkout, setCheckout] = useState<boolean>(false);

  useEffect(() => {
    if (!checkout) return;
    const handleCheckout = setTimeout(() => {
      setCheckout(false);
    }, 5000);

    return () => clearInterval(handleCheckout);
  }, [checkout]);

  function onAddItem(item: Items) {
    dispatch({ type: "ADD_ITEM", payload: item });
  }

  function onRemoveItem(item: Items) {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  }

  function onDeleteItem(id: Pick<Items, "id">) {
    dispatch({ type: "DELETE_ITEM", payload: id });
  }

  function onClearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  function onCheckout() {
    setCheckout(true);
    dispatch({ type: "CLEAR_CART" });
  }
  return (
    <CartContext.Provider
      value={{
        items: state,
        checkout,

        onAddItem,
        onRemoveItem,
        onDeleteItem,
        onClearCart,
        onCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
