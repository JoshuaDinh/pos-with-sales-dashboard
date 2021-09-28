import React, { useState, useEffect } from "react";
import "./dashboard.css";
import axios from "axios";
import { connect } from "react-redux";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Table from "../../Components/Table/Table";
import CardContainer from "../../Components/CardContainer/CardContainer";
import StoreCardContainer from "../../Components/StoreCardContainer/StoreCardContainer";
import DoughnutGraph from "../../Components/Doughnut/DoughnutGraph";
import HorizontalBarChart from "../../Components/HorizontalBarChart/HorizontalBarChart";
import StackedBarChart from "../../Components/StackedBarChart/StackedBarChart";
import LineChart from "../../Components/LineChart/LineChart";
import VerticalBar from "../../Components/VerticalBarChart/VeriticleBarChart";
import PieChart from "../../Components/PieChart/PieChart";
import { fetchDailyData, fetchMonthlyData } from "../../Actions/totalData";

const Dashboard = ({ fetchDailyData, fetchMonthlyData }) => {
  useEffect(() => {
    fetchDailyData();
    fetchMonthlyData();
  }, []);
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <CardContainer />
        <div className="dashboard-team-data-container">
          <Table />
          <div className="dashboard-team-chart-container">
            <DoughnutGraph />
            <HorizontalBarChart />
            <StackedBarChart />
          </div>
        </div>
        <div className="dashboard-store-chart-container">
          <div className="dashboard-left-chart-container">
            <StoreCardContainer />
            <LineChart />
          </div>
          <div className="dashboard-right-chart-container">
            <VerticalBar />
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, { fetchDailyData, fetchMonthlyData })(
  Dashboard
);
