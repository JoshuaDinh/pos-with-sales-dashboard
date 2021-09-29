import React from "react";
import "./lineChart.css";
import { Line } from "react-chartjs-2";
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

const LineChart = ({ dataSet }) => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 240, 240);
    gradient.addColorStop(0.1, "rgb(255, 200, 55,0.7)");
    gradient.addColorStop(0.5, "rgb(255, 128, 8)");
    gradient.addColorStop(0.8, "rgb(255, 200, 55,0.7)");
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
          label: "Store Monthly Trend",
          data: chart_data,
          fill: false,
          backgroundColor: "rgba(95, 167, 37, 0.85)",
          borderColor: gradient,
        },
      ],
    };
  };
  return (
    <div className="line-chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
