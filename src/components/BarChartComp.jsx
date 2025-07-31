import React, { useContext } from "react";
import { adminContext } from "../context/AdminContextProvider";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarChartComp = () => {
  const COLORS = [
    "#6366F1", // Indigo
    "#10B981", // Emerald
    "#F59E0B", // Amber
    "#EF4444", // Red
    "#3B82F6", // Blue
    "#8B5CF6", // Violet
    "#EC4899", // Pink
    "#22D3EE", // Cyan
    "#84CC16", // Lime
  ];
  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value } = payload[0].payload;

      return (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "12px 16px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            color: "#1f2937",
          }}
        >
          <p style={{ fontWeight: "bold", fontSize: "16px" }}>{name}</p>
          <p style={{ fontSize: "14px" }}>💰 Rs {value.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  const { dataByClientAmount } = useContext(adminContext);
  return (
    <div className="w-full p-4 rounded-md h-96 border dark:border-gray-800 shadow-sm border-gray-200 bg-white text-black flex flex-col gap-4 items-center">
      <h2 className="text-xl font-semibold">
        Client-wise Total Project Amount
      </h2>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart data={dataByClientAmount}>
          <XAxis
            dataKey="name"
            interval={0}
            angle={-40}
            textAnchor="end"
            height={70}
            tick={{ fontSize: 10 }}
          />

          <YAxis />
          <Tooltip content={customTooltip} />
          <Bar dataKey={"value"} fill="#000" barSize={40}>
            {dataByClientAmount.map((data, index) => {
              return <Cell key={`bar-${index}`} fill={COLORS[index]} />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComp;
