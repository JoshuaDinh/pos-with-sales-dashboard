import React from "react";
import "./doughnut.css";
import { Doughnut } from "react-chartjs-2";

const data = (canvas) => {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 240, 240);
  gradient.addColorStop(0.1, "rgb(255, 200, 55,0.6)");
  gradient.addColorStop(0.5, "rgb(255, 128, 8)");
  gradient.addColorStop(0.8, "rgb(255, 200, 55,0.6)");
  gradient.addColorStop(1, "rgb(255, 128, 8)");

  return {
    labels: ["Joshua Dinh", "Zung", "Yui", "Dominic", "Tien"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2],
        backgroundColor: gradient,
        borderColor: "#000000",
        borderWidth: 1,
      },
    ],
  };
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
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

const DoughnutGraph = () => {
  return (
    <div className="doughnut">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutGraph;
