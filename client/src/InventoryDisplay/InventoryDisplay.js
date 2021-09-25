import React from "react";
import "./inventoryDisplay.css";
import ImgMediaCard from "../ImgMediaCard/ImgMediaCard";

const InventoryDisplay = () => {
  return (
    <div className="inventory-display">
      <form className="inventory-search-form">
        <input type="text" placeholder="Search Invetory" />
      </form>
      <div className="inventory-item-container">
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </div>
    </div>
  );
};

export default InventoryDisplay;
