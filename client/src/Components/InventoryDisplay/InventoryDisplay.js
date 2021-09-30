import React, { useState, useEffect } from "react";
import "./inventoryDisplay.css";
import axios from "axios";
import ImgMediaCard from "../ImgMediaCard/ImgMediaCard";
import firstImage from "../../imgs/1.jpeg";
import secondImage from "../../imgs/2.png";
import thirdImage from "../../imgs/3.png";
import fourthImage from "../../imgs/4.png";
import fifthImage from "../../imgs/5.png";
import sixthImage from "../../imgs/6.png";
import seventhImage from "../../imgs/7.png";
import eighthImage from "../../imgs/8.jpeg";
import ninthImage from "../../imgs/9.jpeg";
import tenthImage from "../../imgs/10.jpeg";
import eleventhImage from "../../imgs/11.jpeg";

const InventoryDisplay = ({ handleInvoiceDetails }) => {
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
  const imgs = [
    firstImage,
    secondImage,
    thirdImage,
    fourthImage,
    fifthImage,
    sixthImage,
    seventhImage,
    eighthImage,
    ninthImage,
    tenthImage,
    eleventhImage,
  ];

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
              handleInvoiceDetails={handleInvoiceDetails}
              subscription_id={subscription.subscription_id}
              subscription_name={subscription.subscription_name}
              cost={subscription.cost}
              speed={subscription.speed_discount}
              revenue={subscription.revenue}
              img={imgs[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InventoryDisplay;
