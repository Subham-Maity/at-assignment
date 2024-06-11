"use client";
import React, { FC } from "react";
import {
  Cell,
  Pie,
  PieChart,
  PieLabelRenderProps,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "tailwindcss/tailwind.css";

type DataType = {
  name: string;
  value: number;
  color: string;
};

const data: DataType[] = [
  { name: "Bajaj Finserv", value: 25000, color: "#7E5BEF" },
  { name: "Shriram Finance", value: 20000, color: "#FDBA8C" },
  { name: "Mahindra Finance", value: 15000, color: "#A3E635" },
  { name: "Utkarsh Small Finance Bank", value: 40000, color: "#2DD4BF" },
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel: FC<PieLabelRenderProps> = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  if (index === undefined) return null;

  const radius =
    Number(innerRadius) + (Number(outerRadius) - Number(innerRadius)) * 0.5;
  const x = Number(cx) + radius * Math.cos(-Number(midAngle) * RADIAN);
  const y = Number(cy) + radius * Math.sin(-Number(midAngle) * RADIAN);
  const total = data.reduce((acc, entry) => acc + entry.value, 0);
  const percentage = ((data[index].value / total) * 100).toFixed(0);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={Number(x) > Number(cx) ? "start" : "end"}
      dominantBaseline="central"
      fontSize={10} // Adjust font size here to fit text inside the chart
    >
      {`${data[index].value.toLocaleString()} (${percentage}%)`}
    </text>
  );
};

const ChartComponent: FC = () => {
  return (
    <div className="p-4 rounded-lg shadow-lg h-[400px] w-full bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Your FD Portfolio</h2>
        <div>
          <select className="p-1 border border-gray-300 rounded">
            <option>Deposit Amt</option>
          </select>
        </div>
      </div>
      <div className="flex">
        <div className="relative h-[350px] w-[350px]">
          <ResponsiveContainer width="70%" height="70%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120} // Increase the radius here
                fill="#8884d8"
                label={renderCustomizedLabel}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) =>
                  `${value.toLocaleString()} (${((value / 100000) * 100).toFixed(0)}%)`
                }
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="mt-4 text-sm flex-col gap-2">
          {" "}
          {/* Adjust the size of the text in the legend */}
          {data.map((entry, index) => (
            <li key={`item-${index}`} className="flex items-center mb-2">
              <span
                className="w-4 h-4 mr-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              ></span>
              {entry.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChartComponent;
