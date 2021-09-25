import React from "react";
import "./checkOut.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Cart from "../../Components/Cart/Cart";
import InventoryDisplay from "../../Components/InventoryDisplay/InventoryDisplay";

const HomePage = () => {
  return (
    <div className="checkOut">
      <Sidebar />
      <InventoryDisplay />
      <Cart />
    </div>
  );
};

export default HomePage;
