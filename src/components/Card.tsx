import type { Items } from "../data/items";
import Button from "./Button";
import { useCart } from "../context/useCart";

type CardProps = {
  itemsList: Items;
};

export default function Card({ itemsList }: CardProps) {
  const { onAddItem, checkout, items } = useCart();
  const inCart = items.find((item) => item.id === itemsList.id);
  return (
    <>
      <div
        key={itemsList.id}
        className={`bg-white border  rounded-xl flex flex-col gap-2 p-4 max-w-50 relative ${inCart ? "border-2 border-blue-500 " : "border-gray-200"}`}
      >
        <div className="text-4xl text-center">{itemsList.icon}</div>
        {inCart && (
          <div className="absolute top-5 right-5 bg-blue-800 text-white rounded-full text-[10px] font-bold py-0.5 px-2">
            {inCart.quantity}x
          </div>
        )}

        <p className="font-semibold">{itemsList.label}</p>
        <span className="font-light text-xs">{itemsList.category}</span>
        <p className="font-bold text-blue-700">
          {itemsList.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

        <Button
          onClick={() => onAddItem(itemsList)}
          variant={"custom"}
          disabled={checkout}
          className="disabled:cursor-not-allowed disabled:opacity-50"
        >
          + Adicionar
        </Button>
      </div>
    </>
  );
}
