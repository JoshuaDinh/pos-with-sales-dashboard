import React from "react";
import "./lineChart.css";
import { Line } from "react-chartjs-2";

const data = (canvas) => {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 240, 240);
  gradient.addColorStop(0.1, "rgb(255, 200, 55,0.7)");
  gradient.addColorStop(0.5, "rgb(255, 128, 8)");
  gradient.addColorStop(0.8, "rgb(255, 200, 55,0.7)");
  gradient.addColorStop(1, "rgb(255, 128, 8)");

  return {
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
        backgroundColor: "rgba(95, 167, 37, 0.85)",
        borderColor: gradient,
      },
    ],
  };
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
