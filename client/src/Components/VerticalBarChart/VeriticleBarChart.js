import React, { useState, useEffect } from "react";
import "./verticalBar.css";
import { Bar } from "react-chartjs-2";
import { fetchTotalYearlyDataByMonth } from "../../Actions/totalSalesData";
import { connect } from "react-redux";
import moment from "moment";

const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalBar = ({ dataSet }) => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 240, 240);
    gradient.addColorStop(0.1, "rgb(255, 200, 55,0.6)");
    gradient.addColorStop(0.5, "rgb(255, 128, 8)");
    gradient.addColorStop(0.8, "rgb(255, 200, 55,0.6)");
    gradient.addColorStop(1, "rgb(255, 128, 8)");

    const label_names = [];
    const chart_data = [];
    const get_label_names = dataSet.map((data) => {
      label_names.push(moment(data.new_date).format("MMM yy "));
    });

    const get_chart_data = dataSet.map((data) => {
      chart_data.push(data["SUM(subscription_price)"]);
    });

    return {
      labels: label_names,
      datasets: [
        {
          label: "Total Sales By Month",
          data: chart_data,
          backgroundColor: gradient,
          borderColor: "#000000",
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="vertical-bar">
      <Bar data={data} options={options} />
    </div>
  );
};

export default VerticalBar;
