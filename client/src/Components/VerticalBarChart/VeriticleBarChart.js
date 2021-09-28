import React from "react";
import "./verticalBar.css";
import { Bar } from "react-chartjs-2";

const data = (canvas) => {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 240, 240);
  gradient.addColorStop(0.1, "rgb(255, 200, 55,0.6)");
  gradient.addColorStop(0.5, "rgb(255, 128, 8)");
  gradient.addColorStop(0.8, "rgb(255, 200, 55,0.6)");
  gradient.addColorStop(1, "rgb(255, 128, 8)");
  return {
    labels: [
      "Jan",
      "Feb",
      "Mar",
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
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: gradient,
        borderColor: "#000000",
        borderWidth: 1,
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

const VerticalBar = () => (
  <div className="vertical-bar">
    <Bar data={data} options={options} />
  </div>
);

export default VerticalBar;
