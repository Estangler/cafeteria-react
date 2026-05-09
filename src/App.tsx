import Card from "./components/Card";
import Cart from "./components/Cart";
import { ITEMS } from "./data/items";

function App() {
  return (
    <main className="space-y-10 p-8">
      <h1 className="text-3xl font-bold">Cafeteria React</h1>

      <div className="grid grid-cols-2 gap-2 w-fit">
        <div className="grid grid-cols-2 gap-2 w-fit">
          {ITEMS.map((item) => (
            <Card itemsList={item} key={item.id} />
          ))}
        </div>

        <div>
          <Cart />
        </div>
      </div>
    </main>
  );
}

export default App;
