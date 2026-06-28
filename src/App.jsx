import { useState } from "react";
import Navbar from './components/Navbar';

import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cartCount} />

      <div className="p-8 text-center">
        <button
          onClick={() => setCartCount(cartCount + 1)}
          className="btn btn-outline"
        >
          Test Add Item (Cart: {cartCount})
        </button>
      </div>
    </div>
  );
}

export default App;
