import {
  CalendarDays,
  CircleCheck,
  CircleDollarSign,
  Clock,
} from "lucide-react";
import React, { useContext } from "react";
import StatCards from "../components/StatCards";
import RecentProjects from "../components/RecentProjects";
import Refresh from "../components/Refresh";
import LineChartComp from "../components/LineChartComp";
import PieChartComp from "../components/PieChartComp";
import { adminContext } from "../context/AdminContextProvider";

const Dashboard = () => {
  const { totalCompletedAmount, totalEarnings, totalPending, thisMonth } =
    useContext(adminContext);

  const cardData = [
    {
      id: 1,
      icon: CircleDollarSign,
      text: "Total Earnings",
      bgColor: "bg-sky-100",
      shadow: "rgba(56, 189, 248, 0.5)",
      amount: totalEarnings,
      isCurrency: true,
    },
    {
      id: 2,
      icon: Clock,
      text: "Total Pending",
      bgColor: "bg-indigo-100",
      shadow: "rgba(129, 140, 248, 0.5)",
      amount: totalPending,
      isCurrency: true,
    },
    {
      id: 3,
      icon: CircleCheck,
      text: "Total Completed",
      bgColor: "bg-emerald-100",
      shadow: "rgba(52, 211, 153, 0.5)",
      amount: totalCompletedAmount,
      isCurrency: true,
    },
    {
      id: 4,
      icon: CalendarDays,
      text: "This Month",
      bgColor: "bg-purple-100",
      shadow: "rgba(192, 132, 252, 0.5)",
      amount: thisMonth,
      isCurrency: true,
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 w-full sm:w-3/4 lg:w-4/5 min-h-screen md:h-screen overflow-y-auto">
      <div className="flex justify-end px-10 pt-4">
        <Refresh />
      </div>

      <div className="flex flex-col items-center pb-10 pt-4 gap-6 lg:gap-4 sm:flex-row flex-wrap justify-center">
        {cardData.map((card) => (
          <StatCards key={card.id} card={card} />
        ))}
      </div>

      <div className="px-3 py-8 flex flex-col gap-8 items-center lg:flex-row">
        <LineChartComp />
        <PieChartComp />
      </div>

      <div className="px-3 py-8 pb-20 md:pb-32">
        <RecentProjects />
      </div>
    </div>
  );
};

export default Dashboard;
