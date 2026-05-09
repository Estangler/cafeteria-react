import { useContext } from "react";
import { CartContext } from "./cartContext";

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("userCart deve ser usado dentro do CartProvider.");
  }

  return context;
}
