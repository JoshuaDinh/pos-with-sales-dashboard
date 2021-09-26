import React from "react";
import "./dataCard.css";

const DataCard = ({ title, amount, percent }) => {
  return (
    <div className="data-card">
      <h4>{title}</h4>
      <h3>{amount}</h3>
      <span>{percent}</span>
    </div>
  );
};

export default DataCard;
