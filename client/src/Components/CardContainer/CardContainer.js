import React from "react";
import "./cardContainer.css";
import DataCard from "../DataCard/DataCard";

const CardContainer = ({ dataSet }) => {
  return (
    <div className="card-container">
      {dataSet.map((data, index) => {
        return (
          <DataCard
            key={index}
            title={data.subscription_name}
            amount={data["COUNT(*)"]}
            subTitle="Total monthly"
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
