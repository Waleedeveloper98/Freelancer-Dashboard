import React, { useContext } from "react";
import {
  Area,
  AreaChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { adminContext } from "../context/AdminContextProvider";
import { themeContext } from "../context/ThemeContextProvider";

const LineChartComp = () => {
  const { lineChartData } = useContext(adminContext);
  const {theme} = useContext(themeContext)

  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const month = payload[0].payload.month;
      const amount = payload[0].value;

      return (
        <div className="bg-white shadow-lg border border-gray-200 px-4 py-3 rounded-lg">
          <p className="text-gray-700 font-semibold text-sm mb-1">📅 {month}</p>
          <p className="text-green-600 font-bold text-base">
            💰 {amount.toLocaleString("en-IN")} PKR
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full p-4 rounded-md border dark:border-gray-800 shadow-sm border-gray-200 h-80 bg-white text-black flex flex-col gap-4 items-center">
      <h2 className="text-xl font-semibold">Completed Projects Earnings</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={lineChartData}>
          <XAxis dataKey="month" />
          <YAxis  tick={{ fontSize: 13 }} tickFormatter={(value) => value.toLocaleString("en-IN")} />
          <Tooltip content={customTooltip} />
          <Legend />
          <Area dataKey="amount" stroke="blue" fill="blue" type="monotone" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComp;
