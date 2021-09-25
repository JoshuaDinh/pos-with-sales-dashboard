import React from "react";
import "./lineChart.css";
import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Store Monthly Trend",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "#abbaab",
      borderColor: "rgba(117, 115, 115)",
    },
  ],
};

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

const LineChart = () => (
  <div className="line-chart">
    <Line data={data} options={options} />
  </div>
);

export default LineChart;
