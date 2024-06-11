"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import "tailwindcss/tailwind.css";

const ChartComponent = () => {
  const data = {
    labels: [
      "Bajaj Finserv",
      "Shriram Finance",
      "Mahindra Finance",
      "Utkarsh Small Finance Bank",
    ],
    datasets: [
      {
        data: [25000, 20000, 15000, 40000],
        backgroundColor: ["#7E5BEF", "#FDBA8C", "#A3E635", "#2DD4BF"],
        hoverBackgroundColor: ["#7E5BEF", "#FDBA8C", "#A3E635", "#2DD4BF"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          //@ts-ignore
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw.toLocaleString()} (${((tooltipItem.raw / 100000) * 100).toFixed(0)}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="p-4 rounded-lg shadow-lg h-[400px] w-full bg-white ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Your FD Portfolio</h2>
        <div>
          <select className="p-1 border border-gray-300 rounded">
            <option>Deposit Amt</option>
          </select>
        </div>
      </div>
      <div className="flex">
        <div className="relative h-56">
          <Pie data={data} options={options} />
        </div>
        <ul className="mt-4 text-xl flex-col gap-6">
          <li className="flex items-center mb-2">
            <span
              className="w-4 h-4 mr-2 rounded-full"
              style={{ backgroundColor: "#7E5BEF" }}
            ></span>
            Bajaj Finserv
          </li>
          <li className="flex items-center mb-2">
            <span
              className="w-4 h-4 mr-2 rounded-full"
              style={{ backgroundColor: "#FDBA8C" }}
            ></span>
            Shriram Finance
          </li>
          <li className="flex items-center mb-2">
            <span
              className="w-4 h-4 mr-2 rounded-full"
              style={{ backgroundColor: "#A3E635" }}
            ></span>
            Mahindra Finance
          </li>
          <li className="flex items-center mb-2">
            <span
              className="w-4 h-4 mr-2 rounded-full"
              style={{ backgroundColor: "#2DD4BF" }}
            ></span>
            Utkarsh Small Finance Bank
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChartComponent;
