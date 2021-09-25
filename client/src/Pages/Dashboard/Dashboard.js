import React from "react";
import "./dashboard.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Table from "../../Components/Table/Table";
import CardContainer from "../../Components/CardContainer/CardContainer";
import DoughnutGraph from "../../Components/Doughnut/DoughnutGraph";
import HorizontalBarChart from "../../Components/HorizontalBarChart/HorizontalBarChart";
import StackedBarChart from "../../Components/StackedBarChart/StackedBarChart";
import LineChart from "../../Components/LineChart/LineChart";

const Dashboard = () => {
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
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
