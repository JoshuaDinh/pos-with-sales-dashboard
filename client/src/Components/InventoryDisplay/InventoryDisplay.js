import React, { useState, useEffect } from "react";
import "./inventoryDisplay.css";
import axios from "axios";

import ImgMediaCard from "../ImgMediaCard/ImgMediaCard";
import firstImage from "../../imgs/1.png";
import secondImage from "../../imgs/2.png";
import thirdImage from "../../imgs/3.png";
import fourthImage from "../../imgs/4.jpeg";
import fifthImage from "../../imgs/5.png";
import sixthImage from "../../imgs/6.png";

const InventoryDisplay = ({ handleClick }) => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/subscriptions");
        setSubscriptions(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="inventory-display">
      <form className="inventory-search-form">
        <input type="text" placeholder="Search Invetory" />
      </form>
      <div className="inventory-item-container">
        {subscriptions.map((subscription, index) => {
          return (
            <ImgMediaCard
              key={index}
              handleClick={handleClick}
              subscription_id={subscription.subscription_id}
              subscription_name={subscription.subscription_name}
              cost={subscription.cost}
              speed={subscription.speed_discount}
              revenue={subscription.revenue}
              img={firstImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InventoryDisplay;
