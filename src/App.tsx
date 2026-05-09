import Card from "./components/Card";
import Cart from "./components/Cart";
import { ITEMS, type Items } from "./data/items";
import { useReducer } from "react";
import { INITIAL_STATE, reducer } from "./reducer/cardReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  function onAddItem(item: Items) {
    dispatch({ type: "ADD_ITEM", payload: item });
  }

  function onRemoveItem(item: Items) {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  }

  function onDeleteItem(id: Pick<Items, "id">) {
    dispatch({ type: "DELETE_ITEM", payload: id });
  }

  return (
    <main className="space-y-10 p-8">
      <h1 className="text-3xl font-bold">Cafeteria React</h1>

      <div className="grid grid-cols-2 gap-2 w-fit">
        <div className="grid grid-cols-2 gap-2 w-fit">
          <Card itemsList={ITEMS} onAddItem={onAddItem} />
        </div>

        <div>
          <Cart
            items={state}
            onAddItem={onAddItem}
            onRemoveItem={onRemoveItem}
            onDeleteItem={onDeleteItem}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
