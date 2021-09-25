import React from "react";
import { Bar } from "react-chartjs-2";
import "./horizontalBarChart.css";

const data = (canvas) => {
  const ctx = canvas.getContext("2d");

  let gradient = ctx.createLinearGradient(0, 0, 240, 240);
  gradient.addColorStop(0.1, "rgb(247, 246, 246)");
  gradient.addColorStop(0.5, "rgb(171, 186, 171)");
  gradient.addColorStop(0.8, "rgb(247, 246, 246)");
  gradient.addColorStop(1, "rgb(171, 186, 171)");

  return {
    labels: ["Joshua Dinh", "Zung", "Yui", "Dominic", "Tien"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: gradient,
        borderColor: "000000",
        borderWidth: 1,
      },
    ],
  };
};

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

const HorizontalBarChart = () => (
  <div className="horizontal-bar-chart">
    <Bar data={data} options={options} />
  </div>
);

export default HorizontalBarChart;
