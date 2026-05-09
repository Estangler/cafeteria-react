import type { CartItem } from "../reducer/cardReducer";
import Button from "./Button";
import Item from "./Item";

type CartProps = {
  items: CartItem[];
  onAddItem: (item: CartItem) => void;
  onRemoveItem: (item: CartItem) => void;
  onDeleteItem: (id: Pick<CartItem, "id">) => void;
};

export default function Cart({
  items,
  onAddItem,
  onRemoveItem,
  onDeleteItem,
}: CartProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-3 h-fit sticky top-0  w-full">
      <header className="flex justify-between">
        <div className="flex gap-2 font-bold items-center">
          <span>🛒</span>
          <h1>Carrinho</h1>
          <p className="text-[10px] bg-blue-800 text-white h-4 w-5 border border-transparent rounded-full flex items-center justify-center">
            1
          </p>
        </div>

        <button className="underline text-xs text-gray-600 cursor-pointer">
          Limpar
        </button>
      </header>

      {items.length === 0 ? (
        <div className=" flex flex-col text-sm text-gray-400 items-center justify-center p-8">
          <p>Seu carrinho está vazio.</p>
          <p>Adicione alguns produtos!</p>
        </div>
      ) : (
        items.map((item) => (
          <div className="w-full" key={item.id}>
            <Item
              item={item}
              onAddItem={onAddItem}
              onRemoveItem={onRemoveItem}
              onDeleteItem={onDeleteItem}
            />
          </div>
        ))
      )}

      {items.length === 0 ? (
        ""
      ) : (
        <div className="border-dashed border-t-2 border-gray-400">
          <div className="py-5 flex justify-between">
            <p>Total</p>
            <p>0</p>
          </div>
          <Button variant="custom" className="w-full">
            Finalizar Pedido
          </Button>
        </div>
      )}
    </div>
  );
}
