import React from "react";
import "./imgMediaCard.css";

const ImgMediaCard = ({
  handleClick,
  Subscription,
  Cost,
  Speed,
  Revenue,
  img,
}) => {
  const data = { Subscription, Cost, Speed, Revenue };

  return (
    <div className="card">
      <img className="card-img" src={img} />
      <h2>{Subscription}</h2>
      <div className="card-content">
        <h4>
          Revenue increase: <span>{Revenue}</span>
        </h4>
        <h5>Speed discount: {Speed}</h5>
      </div>
      <div className="card-actions">
        <h4>Cost: {Cost} /Monthly</h4>
        <button onClick={() => handleClick(data)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default ImgMediaCard;
