import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import "./horizontalBarChart.css";
import { fetchDailyData } from "../../Actions/dailyData";
import { connect } from "react-redux";

const options = {
  indexAxis: "y",
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  maintainAspectRatio: false,

  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Today's Sales Board",
    },
  },
};

const HorizontalBarChart = ({ fetchDailyData, employeeData }) => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");

    let gradient = ctx.createLinearGradient(0, 0, 240, 240);
    gradient.addColorStop(0.1, "rgb(255, 200, 55,0.6)");
    gradient.addColorStop(0.5, "rgb(255, 128, 8)");
    gradient.addColorStop(0.8, "rgb(255, 200, 55,0.6)");
    gradient.addColorStop(1, "rgb(255, 128, 8)");

    const label_names = [];
    const chart_data = [];
    const get_label_names = employeeData.map((data) => {
      label_names.push(data.employee_name);
    });

    const get_chart_data = employeeData.map((data) => {
      chart_data.push(data["SUM(subscription_price)"]);
    });

    console.log(label_names);
    return {
      labels: label_names,
      datasets: [
        {
          label: "Sales",
          data: chart_data,
          backgroundColor: gradient,
          borderColor: "000000",
          borderWidth: 1,
        },
      ],
    };
  };

  useEffect(() => {
    {
      fetchDailyData();
    }
  }, []);
  return (
    <div className="horizontal-bar-chart">
      <Bar data={data} options={options} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    employeeData: state.dailyEmployeeData.data,
  };
};
export default connect(mapStateToProps, { fetchDailyData })(HorizontalBarChart);
