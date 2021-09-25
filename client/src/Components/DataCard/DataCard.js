import React from "react";
import "./dataCard.css";

const DataCard = ({ title, amount, percent }) => {
  return (
    <div className="data-card">
      <h3>{title}</h3>
      <h2>{amount}</h2>
      <span>{percent}</span>
    </div>
  );
};

export default DataCard;
