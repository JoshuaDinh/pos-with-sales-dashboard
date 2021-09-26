import * as React from "react";
import "./imgMediaCard.css";

const ImgMediaCard = ({ plan, cost, speed, revenue, img }) => {
  return (
    <div className="card">
      <img className="card-img" src={img} />
      <h2>{plan}</h2>
      <div className="card-content">
        <h4>
          Revenue increase: <span>{revenue}</span>
        </h4>
        <h5>Speed discount: {speed}</h5>
      </div>
      <div className="card-actions">
        {/* <button>Learn More</button> */}
        <h4>Cost: {cost} /Monthly</h4>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default ImgMediaCard;
