import React from "react";
import "./verticalBar.css";
import { Bar } from "react-chartjs-2";

const data = (canvas) => {
  const ctx = canvas.getContext("2d");

  let gradient = ctx.createLinearGradient(0, 0, 240, 240);
  gradient.addColorStop(0.1, "rgb(247, 246, 246)");
  gradient.addColorStop(0.5, "rgb(171, 186, 171)");
  gradient.addColorStop(0.8, "rgb(247, 246, 246)");
  gradient.addColorStop(1, "rgb(171, 186, 171)");

  return {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: gradient,
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
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
