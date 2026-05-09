import type { Items } from "../data/items";
import Button from "./Button";

type CardProps = {
  itemsList: Items[];
  onAddItem: (item: Items) => void;
};

export default function Card({ itemsList, onAddItem }: CardProps) {
  return (
    <>
      {itemsList.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-gray-200 rounded-xl flex flex-col gap-2 p-4 max-w-50 relative"
        >
          <div className="text-4xl text-center">{item.icon}</div>
          <p className="font-semibold">{item.label}</p>
          <span className="font-light text-xs">{item.category}</span>
          <p className="font-bold text-blue-700">
            {item.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>

          <Button onClick={() => onAddItem(item)} variant={"custom"}>
            + Adicionar
          </Button>
        </div>
      ))}
    </>
  );
}
