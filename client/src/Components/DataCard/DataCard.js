import React from "react";
import "./dataCard.css";

const DataCard = ({ title, amount, subTitle }) => {
  return (
    <div className="data-card">
      <h4>{title}</h4>
      <h3>{amount}</h3>
      <p>{subTitle}</p>
    </div>
  );
};

export default DataCard;
