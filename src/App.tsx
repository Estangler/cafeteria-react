import Card from "./components/Card";
import Cart from "./components/Cart";
import { items } from "./data/items";
import { useReducer } from "react";
import { INITIAL_STATE, reducer, type CartItem } from "./reducer/cardReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  function onAddItem(item: CartItem) {
    dispatch({ type: "ADD_ITEM", payload: item });
  }

  return (
    <main className="space-y-10 p-8">
      <h1 className="text-3xl font-bold">Cafeteria React</h1>

      <div className="grid grid-cols-2 gap-2 w-fit">
        <div className="grid grid-cols-2 gap-2 w-fit">
          <Card itemsList={items} onAddItem={onAddItem} />
        </div>

        <div>
          <Cart items={state} />
        </div>
      </div>
    </main>
  );
}

export default App;
