import React from "react";
import "./storeCardContainer.css";
import DataCard from "../DataCard/DataCard";
import numeral from "numeral";
import { connect } from "react-redux";

const StoreCardContainer = ({ dailyData, monthlyData, yearlyData }) => {
  return (
    <div className="storeCardContainer">
      <DataCard
        title="Todays Sales Total"
        amount={numeral(dailyData["SUM(subscription_price)"]).format("($0,0)")}
      />
      <DataCard
        title="Monthly Sales Total"
        amount={numeral(monthlyData["SUM(subscription_price)"]).format(
          "($0,0)"
        )}
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
    dailyData: state.totalSalesData.dailyData,
    monthlyData: state.totalSalesData.monthlyData,
    yearlyData: state.totalSalesData.yearlyData,
  };
};

export default connect(mapStateToProps)(StoreCardContainer);
