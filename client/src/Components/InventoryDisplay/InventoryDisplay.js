import React, { useState, useEffect } from "react";
import "./inventoryDisplay.css";
import axios from "axios";

import ImgMediaCard from "../ImgMediaCard/ImgMediaCard";
import fiveStar from "../../imgs/5star.png";
import twoDiamond from "../../imgs/2diamond.png";
import threeDiamond from "../../imgs/3diamond.png";
import fourDiamond from "../../imgs/4diamond.png";
import fiveDiamond from "../../imgs/5diamond.png";
import sevenDiamond from "../../imgs/7diamond.png";

const InventoryDisplay = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/plans");
      setPlans(response.data);
    };
    fetchData();
  });
  return (
    <div className="inventory-display">
      <form className="inventory-search-form">
        <input type="text" placeholder="Search Invetory" />
      </form>
      <div className="inventory-item-container">
        {plans.map((plan) => {
          return (
            <ImgMediaCard
              plan={plan.name}
              cost={plan.cost}
              speed={plan.speed}
              revenue={plan.revenue}
              img="https://cdn1.iconfinder.com/data/icons/youtuber/256/thumbs-up-like-gesture-512.png"
            />
          );
        })}
      </div>
    </div>
  );
};

export default InventoryDisplay;
