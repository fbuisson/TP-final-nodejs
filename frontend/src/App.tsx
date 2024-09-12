import { useState } from "react";
import "./App.css";
import Book from "./Components/Book.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="App">
        <header className="App-header">
          <h1>Book List</h1>
        </header>
        <main>
          <Book />
        </main>
      </div>
    </>
  );
}

export default App;
