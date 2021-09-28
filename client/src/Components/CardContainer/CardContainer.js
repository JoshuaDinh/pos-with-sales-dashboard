import React from "react";
import "./cardContainer.css";
import DataCard from "../DataCard/DataCard";
import { connect } from "react-redux";

const CardContainer = ({ dailyData, monthlyData }) => {
  console.log(monthlyData);
  return (
    <div className="card-container">
      <DataCard title="Todays Sales" amount={dailyData} percent="%90" />
      <DataCard
        title="Monthly Sales Total"
        amount={monthlyData}
        percent="%90"
      />
      <DataCard title="Goal:" amount="$10,000" percent="%90" />
      <DataCard title="Todays Sales Leader" amount="$10,000" percent="%90" />
      <DataCard title="Monthly Sales Leader" amount="$10,000" percent="%90" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    monthlyData: state.totalData.monthlyData,
    dailyData: state.totalData.dailyData,
  };
};
export default connect(mapStateToProps)(CardContainer);
