import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { connect } from "react-redux";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Table from "../../Components/Table/Table";
import CardContainer from "../../Components/CardContainer/CardContainer";
import StoreCardContainer from "../../Components/StoreCardContainer/StoreCardContainer";
import DoughnutGraph from "../../Components/Doughnut/DoughnutGraph";
import HorizontalBarChart from "../../Components/HorizontalBarChart/HorizontalBarChart";
import LineChart from "../../Components/LineChart/LineChart";
import VerticalBar from "../../Components/VerticalBarChart/VeriticleBarChart";
import PieChart from "../../Components/PieChart/PieChart";
import {
  fetchTotalDailyData,
  fetchTotalMonthlyData,
  fetchTotalYearlyData,
  fetchTotalYearlyDataByMonth,
} from "../../Actions/totalSalesData";
import {
  fetchDailyEmployeeData,
  fetchMonthlyEmployeeData,
} from "../../Actions/employeeSalesData";
import {
  fetchDailySubscriptionsData,
  fetchMonthlySubscriptionsData,
} from "../../Actions/subscriptionsData";

const Dashboard = ({
  fetchTotalDailyData,
  fetchTotalMonthlyData,
  fetchTotalYearlyData,
  fetchTotalYearlyDataByMonth,
  fetchDailyEmployeeData,
  fetchMonthlyEmployeeData,
  fetchDailySubscriptionsData,
  fetchMonthlySubscriptionsData,
  dailyData,
  monthlyData,
  yearlyDataByMonth,
  subscriptionsData,
}) => {
  useEffect(() => {
    fetchTotalDailyData();
    fetchTotalMonthlyData();
    fetchTotalYearlyData();
    fetchTotalYearlyDataByMonth();
    fetchDailyEmployeeData();
    fetchMonthlyEmployeeData();
    fetchDailySubscriptionsData();
    fetchMonthlySubscriptionsData();
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <CardContainer dataSet={subscriptionsData} />
        <div className="dashboard-team-data-container">
          <Table dataSet={monthlyData} />
          <div className="dashboard-team-chart-container">
            <DoughnutGraph dataSet={dailyData} />
            <HorizontalBarChart dataSet={dailyData} />
            <PieChart dataSet={subscriptionsData} />
          </div>
        </div>
        <div className="dashboard-store-chart-container">
          <div className="dashboard-left-chart-container">
            <StoreCardContainer />
            <LineChart dataSet={yearlyDataByMonth} />
          </div>
          <div className="dashboard-right-chart-container">
            <VerticalBar dataSet={yearlyDataByMonth} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dailyData: state.employeeSalesData.daily,
    monthlyData: state.employeeSalesData.monthly,
    yearlyDataByMonth: state.totalSalesData.yearlyDataByMonth,
    subscriptionsData: state.subscriptionsData,
  };
};
export default connect(mapStateToProps, {
  fetchTotalDailyData,
  fetchTotalMonthlyData,
  fetchTotalYearlyData,
  fetchTotalYearlyDataByMonth,
  fetchDailyEmployeeData,
  fetchMonthlyEmployeeData,
  fetchDailySubscriptionsData,
  fetchMonthlySubscriptionsData,
})(Dashboard);
