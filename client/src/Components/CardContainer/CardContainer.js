import React from "react";
import "./cardContainer.css";
import DataCard from "../DataCard/DataCard";
import numeral from "numeral";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => {
  return {
    monthlyData: state.totalSalesData.monthlyData,
    dailyData: state.totalSalesData.dailyData,
  };
};
export default connect(mapStateToProps)(CardContainer);
