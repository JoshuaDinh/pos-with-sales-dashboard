import React from "react";
import "./storeCardContainer.css";
import DataCard from "../DataCard/DataCard";
import numeral from "numeral";
import { connect } from "react-redux";

const StoreCardContainer = ({ dailyData, monthlyData, yearlyData }) => {
  console.log(yearlyData);

  return (
    <div className="storeCardContainer">
      <DataCard
        title="Todays Sales"
        amount={numeral(dailyData).format("($0,0)")}
      />
      <DataCard
        title="Monthly Sales Total"
        amount={numeral(monthlyData).format("($0,0)")}
      />
      <DataCard
        title="Yearly Sales Total"
        amount={numeral(yearlyData["SUM(subscription_price)"]).format("($0,0)")}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    monthlyData: state.totalData.monthlyData,
    dailyData: state.totalData.dailyData,
    yearlyData: state.totalData.yearlyData,
  };
};

export default connect(mapStateToProps)(StoreCardContainer);
