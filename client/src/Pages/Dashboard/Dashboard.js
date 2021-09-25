import React from "react";
import "./dashboard.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Table from "../../Components/Table/Table";
import CardContainer from "../../Components/CardContainer/CardContainer";
import DoughnutGraph from "../../Components/Doughnut/DoughnutGraph";
import HorizontalBarChart from "../../Components/HorizontalBarChart/HorizontalBarChart";
import LineChart from "../../Components/LineChart/LineChart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <CardContainer />
        <div className="dashboard-data">
          <Table />
          <div className="dashboard-chart-container">
            <DoughnutGraph />
            <HorizontalBarChart />
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
