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

const PieChartComp = () => {
  const { pieChartData } = useContext(adminContext);

  const customColor = (value) => {
    switch (value) {
      case "Completed":
        return "#00C49F";
      case "Pending":
        return "#FFBB28";
      default:
        return "#000";
    }
  };

  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const status = payload[0].payload.status;
      const value = payload[0].value; 
      const color = customColor(status);

      return (
        <div
          style={{
            borderLeft: `5px solid ${color}`,
            backgroundColor: "#ffffff",
            padding: "12px 16px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            color: "#1f2937",
          }}
        >
          <p className="text-base font-semibold mb-1">
            {status === "Completed" ? "✅" : "⏳"} {status} Projects
          </p>
          <p className="text-lg font-bold text-gray-700">
            📁 {value} {value === 1 ? "project" : "projects"}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-4/5 sm:w-3/5 p-4 rounded-md border dark:border-gray-800 shadow-sm border-gray-200 bg-white h-80">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <PieChart data={pieChartData}>
          <Tooltip content={customTooltip} />
          <Legend />
          <Pie
            data={pieChartData}
            dataKey={"value"}
            nameKey={"status"}
            cx={"50%"}
            cy={"50%"}
            outerRadius={100}
            innerRadius={50}
            fill="#8884d8"
            label
          >
            {pieChartData.map((entry, index) => {
              return (
                <Cell key={`cell-${index}`} fill={customColor(entry.status)} />
              );
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComp;
