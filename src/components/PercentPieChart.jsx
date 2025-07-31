import React, { useContext } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { adminContext } from "../context/AdminContextProvider";
import { data } from "react-router-dom";

const PercentPieChart = () => {
  const { dataByClientAmount } = useContext(adminContext);
  const COLORS = [
    "#6366F1",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#3B82F6",
    "#8B5CF6",
    "#EC4899",
    "#22D3EE",
    "#84CC16",
  ];
  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value } = payload[0];

      // Calculate total to compute percentage
      const total = dataByClientAmount.reduce(
        (sum, item) => sum + item.value,
        0
      );
      const percentage = ((value / total) * 100).toFixed(1);

      return (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "12px 16px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            color: "#1f2937",
            borderLeft: "5px solid #6366F1",
          }}
        >
          <p className="text-base font-semibold mb-1">👤 {name}</p>
          <p className="text-lg font-bold text-gray-700">
            💰 Rs {value.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">📊 {percentage}% of total</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-4/5 md:w-3/5 p-4 rounded-md border dark:border-gray-800 shadow-sm border-gray-200 bg-white h-96 text-black flex flex-col gap-4 items-center">
      <h2 className="text-xl font-semibold text-center">
        Amount by Client (in %)
      </h2>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <PieChart>
          <Pie
            data={dataByClientAmount}
            dataKey={"value"}
            nameKey={"name"}
            cx={"50%"}
            cy={"50%"}
            outerRadius={100}
            innerRadius={50}
            fill="#8884d8"
            label
          >
            {dataByClientAmount.map((entry, index) => {
              return (
                <Cell
                  key={`pie-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              );
            })}
          </Pie>
          <Tooltip content={customTooltip} />
          {/* <Legend /> */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PercentPieChart;
