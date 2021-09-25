import React from "react";
import "./cardContainer.css";
import DataCard from "../DataCard/DataCard";

const CardContainer = () => {
  return (
    <div className="card-container">
      <DataCard />
      <DataCard />
      <DataCard />
      <DataCard />
    </div>
  );
};

export default CardContainer;
