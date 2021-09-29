import React from "react";
import "./cardContainer.css";
import DataCard from "../DataCard/DataCard";

const CardContainer = ({ dataSet }) => {
  return (
    <div className="card-container">
      {dataSet.map((data) => {
        console.log(data);
        return (
          <DataCard
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
