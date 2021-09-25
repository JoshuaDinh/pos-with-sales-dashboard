import React from "react";
import "./pieChart.css";

import { Pie } from "react-chartjs-2";

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
          "#000000",
          "rgba(117, 115, 115)",
          "#ffffff",
          "#707a70",
          "#324b32",
          "rgba(83, 83, 83)",
        ],
        borderWidth: 1,
      },
    ],
  };
};
const options = { maintainAspectRatio: false, responsive: true };

const PieChart = () => (
  <div className="pie-chart">
    <Pie data={data} options={options} />
  </div>
);

export default PieChart;
