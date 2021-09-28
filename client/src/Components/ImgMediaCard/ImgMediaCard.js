import React from "react";
import "./imgMediaCard.css";

const ImgMediaCard = ({
  handleClick,
  subscription_id,
  subscription_name,
  cost,
  speed,
  revenue,
  img,
}) => {
  const data = { subscription_name, cost, speed, revenue, subscription_id };
  return (
    <div className="card">
      <img className="card-img" src={img} />
      <h2>{subscription_name}</h2>
      <div className="card-content">
        <h4>
          Revenue increase: <span className="green">{revenue}</span>
        </h4>
        <h5>
          Speed discount: <span className="red">{speed}</span>
        </h5>
      </div>
      <div className="card-actions">
        <h4>Cost: ${cost} /Monthly</h4>
        <button className=" card-btn" onClick={() => handleClick(data)}>
          <h4>Add To Cart</h4>
        </button>
      </div>
    </div>
  );
};

export default ImgMediaCard;
