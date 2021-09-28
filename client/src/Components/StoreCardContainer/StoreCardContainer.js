import React from "react";
import "./storeCardContainer.css";
import DataCard from "../DataCard/DataCard";
import numeral from "numeral";
import { connect } from "react-redux";

const StoreCardContainer = ({ dailyData, monthlyData }) => {
  return (
    <div className="storeCardContainer">
      <DataCard
        title="Todays Sales"
        amount={numeral(dailyData).format("($0,0)")}
        percent="%90"
      />
      <DataCard
        title="Monthly Sales Total"
        amount={numeral(monthlyData).format("($0,0)")}
        percent="%90"
      />
      <DataCard title="Goal:" amount="$10,000" percent="%90" />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    monthlyData: state.totalData.monthlyData,
    dailyData: state.totalData.dailyData,
  };
};

export default connect(mapStateToProps)(StoreCardContainer);
