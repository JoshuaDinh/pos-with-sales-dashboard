import React from "react";
import "./stackedBar.css";
import { Bar } from "react-chartjs-2";

const data = (canvas) => {
  const ctx = canvas.getContext("2d");

  let gradient = ctx.createLinearGradient(0, 0, 240, 240);
  gradient.addColorStop(0.1, "rgb(255, 200, 55,0.6)");
  gradient.addColorStop(0.5, "rgb(255, 128, 8)");
  gradient.addColorStop(0.8, "rgb(255, 200, 55,0.6)");
  gradient.addColorStop(1, "rgb(255, 128, 8)");

  return {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [],
    //   {
    //     label: "Joshua Dinh",
    //     data: [12, 19, 3, 5, 2, 3, 8],
    //     backgroundColor: gradient,
    //   },
    //   {
    //     label: "zung",
    //     data: [2, 3, 20, 5, 1, 4, 40],
    //     backgroundColor: gradient,
    //   },
    //   {
    //     label: "yuui",
    //     data: [3, 10, 13, 15, 22, 30, 25],
    //     backgroundColor: gradient,
    //   },
    //   {
    //     label: "dominic",
    //     data: [3, 10, 13, 15, 22, 30, 10],
    //     backgroundColor: gradient,
    //   },
    //   {
    //     label: "tien",
    //     data: [3, 10, 13, 15, 22, 30, 8],
    //     backgroundColor: gradient,
    //   },
    //   {
    //     label: "zung",
    //     data: [2, 3, 20, 5, 1, 4, 6],
    //     backgroundColor: gradient,
    //   },
    // ],
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
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};

const StackedBarChart = () => (
  <div className="stackedBar">
    <Bar data={data} options={options} />
  </div>
);

export default StackedBarChart;
