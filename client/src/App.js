import React from "react";
import "./app.css";
import Cart from "./Cart/Cart";
import InventoryDisplay from "./InventoryDisplay/InventoryDisplay";

const App = () => {
  return (
    <div className="app">
      <InventoryDisplay />
      <Cart />
    </div>
  );
};

export default App;
