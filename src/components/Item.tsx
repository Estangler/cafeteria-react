import type { CartItem } from "../reducer/types";
import Button from "./Button";

type ItemProps = {
  item: CartItem;
  onAddItem: (item: CartItem) => void;
  onRemoveItem: (item: CartItem) => void;
  onDeleteItem: (id: Pick<CartItem, "id">) => void;
};

export default function Item({
  item,
  onAddItem,
  onRemoveItem,
  onDeleteItem,
}: ItemProps) {
  return (
    <section className="flex items-center justify-between border-b border-gray-200 py-3">
      <div className="flex items-center gap-2">
        <div className="text-xl">{item.icon}</div>
        <div>
          <div className="font-semibold text-sm">{item.label}</div>
          <div className="font-light text-sm">
            {item.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </div>
        </div>
      </div>

      <div className="flex gap-2 ">
        <Button variant={"default"} onClick={() => onRemoveItem(item)}>
          -
        </Button>
        <span className="font-semibold">{item.quantity}</span>
        <Button variant={"default"} onClick={() => onAddItem(item)}>
          +
        </Button>
        <Button
          variant={"default"}
          className="bg-red-500/30 text-red-500 font-semibold border-red-300"
          onClick={() => onDeleteItem(item)}
        >
          x
        </Button>
      </div>
    </section>
  );
}
