import React from "react";
import "./pieChart.css";

import { Pie } from "react-chartjs-2";

const options = { maintainAspectRatio: false, responsive: true };

const PieChart = ({ dataSet }) => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");

    let gradient = ctx.createLinearGradient(0, 0, 240, 240);
    gradient.addColorStop(0.1, "rgb(255, 200, 55,0.6)");
    gradient.addColorStop(0.5, "rgb(255, 128, 8)");
    gradient.addColorStop(0.8, "rgb(255, 200, 55,0.6)");
    gradient.addColorStop(1, "rgb(255, 128, 8)");

    const label_names = [];
    const chart_data = [];
    const get_label_names = dataSet.map((data) => {
      label_names.push(data.subscription_name);
    });

    const get_chart_data = dataSet.map((data) => {
      chart_data.push(data["COUNT(*)"]);
    });

    return {
      labels: label_names,
      datasets: [
        {
          label: "# of Votes",
          data: chart_data,
          backgroundColor: gradient,
          borderColor: "#000000",
          borderWidth: 1,
        },
      ],
    };
  };
  return (
    <div className="pie-chart-container">
      <h3>Todays Subscriptions Sold</h3>
      <div className="pie-chart">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
