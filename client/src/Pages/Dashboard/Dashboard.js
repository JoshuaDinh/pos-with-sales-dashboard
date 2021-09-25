import React from "react";
import "./dashboard.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Table from "../../Components/Table/Table";
import DataCard from "../../Components/DataCard/DataCard";
import CardContainer from "../../Components/CardContainer/CardContainer";
import DoughnutGraph from "../../Components/Doughnut/DoughnutGraph";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <CardContainer />
        <div className="dashboard-data">
          <Table />
          <DoughnutGraph />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
