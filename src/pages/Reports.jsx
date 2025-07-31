import React, { useContext } from "react";
import {
  CalendarDays,
  CircleCheck,
  CircleDollarSign,
  Clock,
} from "lucide-react";
import StatCards from "../components/StatCards";
import { adminContext } from "../context/AdminContextProvider";
import BarChartComp from "../components/BarChartComp";
import PercentPieChart from "../components/PercentPieChart";

const Reports = () => {
  // Safely destructure with fallback empty values
  const {
    projectsCount = {
      totalProjects: 0,
      pendingProjects: 0,
      completedProjects: 0,
    },
    totalCompletedAmount = 0,
  } = useContext(adminContext);

  const cardsData = [
    {
      id: 1,
      icon: CircleDollarSign,
      text: "Total Projects",
      bgColor: "bg-sky-100",
      amount: projectsCount.totalProjects || 0,
      isCurrency: false,
    },
    {
      id: 2,
      icon: Clock,
      text: "Pending Projects",
      bgColor: "bg-indigo-100",
      amount: projectsCount.pendingProjects || 0,
      isCurrency: false,
    },
    {
      id: 3,
      icon: CircleCheck,
      text: "Completed Projects",
      bgColor: "bg-emerald-100",
      amount: projectsCount.completedProjects || 0,
      isCurrency: false,
    },
    {
      id: 4,
      icon: CalendarDays,
      text: "Total Revenue",
      bgColor: "bg-purple-100",
      amount: totalCompletedAmount || 0,
      isCurrency: true,
    },
  ];

  return (
    <div className="w-full sm:w-3/4 lg:w-4/5 min-h-screen md:h-screen overflow-y-auto flex flex-col items-start py-10 gap-6 lg:gap-4 sm:flex-row flex-wrap justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full flex flex-col items-center py-10 gap-6 lg:gap-4 sm:flex-row flex-wrap justify-center">
        {cardsData.map((card) => (
          <StatCards key={card.id} card={card} />
        ))}
      </div>
      <div className="w-full px-8 py-8 flex flex-col pb-20 md:pb-32 gap-8 items-center lg:flex-row">
        <BarChartComp />
        <PercentPieChart />
      </div>
    </div>
  );
};

export default Reports;
