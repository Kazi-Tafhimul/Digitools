import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductSection from "./components/ProductSection";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";

import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (product) => {
    const alreadyExists = cartItems.some((item) => item.id === product.id);
    if (!alreadyExists) {
      setCartItems([...cartItems, product]);
    }
  };
  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };
  const handleCheckout = () => {
    alert("Checkout successful!");
    setCartItems([]);
  };
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cartItems.length} />
      <Banner></Banner>
      <Stats></Stats>
      <ProductSection
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onCheckout={handleCheckout}
        cartTotal={cartTotal}
      />
      <HowItWorks></HowItWorks>
      <Pricing></Pricing>
      <Footer></Footer>
    </div>
  );
}

export default App;
