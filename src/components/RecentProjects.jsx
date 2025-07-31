import React, { useContext } from "react";
import { adminContext } from "../context/AdminContextProvider";

const TABLE_HEADERS = ["Project Title", "Client Name", "Amount", "Status"];

const TableHeader = () => (
  <div className="grid grid-cols-12 font-medium text-xs lg:text-sm">
    <div className="py-2 px-2 uppercase bg-zinc-200 text-black col-span-4 flex items-center justify-start md:justify-center">
      {TABLE_HEADERS[0]}
    </div>
    <div className="py-2 px-2 uppercase bg-zinc-200 text-black col-span-3 flex items-center justify-start md:justify-center">
      {TABLE_HEADERS[1]}
    </div>
    <div className="py-2 px-2 uppercase bg-zinc-200 text-black col-span-2 flex items-center justify-center">
      {TABLE_HEADERS[2]}
    </div>
    <div className="py-2 px-2 uppercase bg-zinc-200 text-black col-span-3 flex items-center justify-center">
      {TABLE_HEADERS[3]}
    </div>
  </div>
);

const ProjectRow = ({ project }) => {
  const { id, clientName, projectName, amount, status } = project;

  const statusStyles =
    status === "Completed"
      ? "bg-[#DCFCE7] text-[#166534]"
      : "bg-[#FEF9C3] text-[#8A5416]";

  const formattedAmount = new Intl.NumberFormat("en-IN").format(amount);

  return (
    <div
      key={id}
      className="grid grid-cols-12 border-b border-black text-xs md:text-sm py-2 md:py-3 lg:py-4 lg:text-lg"
    >
      <div className="capitalize col-span-4 flex items-center justify-center">
        {projectName}
      </div>
      <div className="capitalize col-span-3 flex items-center justify-center">
        {clientName}
      </div>
      <div className="whitespace-nowrap col-span-2 flex items-center justify-center">
        Rs {formattedAmount}
      </div>
      <div className="whitespace-nowrap col-span-3 flex items-center justify-center">
        <div
          className={`text-[8px] md:text-base px-2 sm:px-3 sm:text-[10px] py-1 md:px-4 rounded-full ${statusStyles}`}
        >
          {status}
        </div>
      </div>
    </div>
  );
};

const RecentProjects = () => {
  const { recentProjects } = useContext(adminContext);

  if (!recentProjects || recentProjects.length === 0) {
    return (
      <div className="w-full rounded-md overflow-hidden min-h-72 bg-white border dark:border-gray-800 shadow-sm border-gray-200 flex items-center justify-center text-gray-600">
        No recent projects available.
      </div>
    );
  }

  return (
    <div className="w-full rounded-md overflow-hidden min-h-72 bg-white border dark:border-gray-800 shadow-sm border-gray-200">
      <div className="text-black font-semibold border-b px-2 py-4">
        <h4 className="lg:text-lg">Recent Projects</h4>
      </div>
      <TableHeader />
      <div className="bg-white text-gray-900 dark:text-white dark:bg-gray-800">
        {recentProjects.slice(0, 5).map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
