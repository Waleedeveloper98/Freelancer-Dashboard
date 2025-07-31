import React, { useContext, useState } from "react";
import { adminContext } from "../context/AdminContextProvider";
import { Plus } from "lucide-react";

const Projects = () => {
  const { setFormVisible, formDataCollection } = useContext(adminContext);
  const [selectedSort, setSelectedSort] = useState("");

  const sortbyValue = (selectedSort, formDataCollection) => {
    switch (selectedSort) {
      case "completed":
        return formDataCollection.filter(
          (project) => project.status === "Completed"
        );
      case "pending":
        return formDataCollection.filter(
          (project) => project.status === "Pending"
        );
      case "htl":
        return [...formDataCollection].sort((a, b) => b.amount - a.amount);
      case "lth":
        return [...formDataCollection].sort((a, b) => a.amount - b.amount);
      case "date":
        return [...formDataCollection].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      default:
        return formDataCollection;
    }
  };

  const sortedProjects = sortbyValue(selectedSort, formDataCollection);

  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-gray-50 dark:bg-gray-900 pb-10">
      <div className="flex flex-col w-full px-6 pt-6 flex-1 overflow-hidden hide-scrollbar pb-10">
        <div className="flex items-center justify-between flex-col gap-8 md:flex-row md:gap-0">
          <h2 className="font-semibold text-2xl w-fit relative text-gray-900 dark:text-white">
            <div className="line absolute w-full h-[2px] bg-yellow-400 -bottom-1 rounded-md"></div>
            List of all Projects
          </h2>
          <div className="flex items-center gap-10">
            <button
              onClick={() => setFormVisible(true)}
              className="text-sm bg-blue-800 px-4 py-2 rounded-md cursor-pointer font-medium flex items-center gap-1 text-white"
            >
              <Plus className="w-4 h-4 font-bold" /> <span>Add Project</span>
            </button>
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="bg-white text-black text-sm px-4 py-2 rounded-md shadow-sm"
            >
              <option disabled>Sort By</option>
              <option value="">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="htl">High to Low</option>
              <option value="lth">Low to High</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>

        <div className="overflow-y-auto mt-6 pr-2 h-[calc(100vh-160px)]">
          <div className="hidden md:grid grid-cols-12 font-medium text-xs lg:text-sm w-full">
            <div className="py-2 px-2 uppercase bg-zinc-200 text-black col-span-3 flex justify-center">
              project title
            </div>
            <div className="py-2 px-2 uppercase bg-zinc-200 text-black col-span-3 flex justify-center">
              client name
            </div>
            <div className="py-2 px-2 uppercase bg-zinc-200 text-black col-span-2 flex justify-center">
              date
            </div>
            <div className="py-2 px-2 uppercase bg-zinc-200 text-black col-span-2 flex justify-center">
              amount
            </div>
            <div className="py-2 px-2 uppercase bg-zinc-200 text-black col-span-2 flex justify-center">
              status
            </div>
          </div>

          {sortedProjects.map((project) => {
            const { id, amount, clientName, date, projectName, status } =
              project;
            return (
              <div
                key={id}
                className="bg-white text-gray-900 dark:text-white dark:bg-gray-800 grid grid-cols-1 grid-rows-6 p-4 md:grid-cols-12 md:grid-rows-1 w-full rounded-md md:rounded-none md:text-sm md:border-b md:border-zinc-500"
              >
                <p className="mb-1 md:mb-0 md:col-span-3 md:flex md:items-center md:justify-center">
                  <strong className="md:hidden">Client:</strong> {clientName}
                </p>
                <p className="mb-1 md:mb-0 md:col-span-3 md:flex md:items-center md:justify-center">
                  <strong className="md:hidden">Project:</strong> {projectName}
                </p>
                <p className="mb-1 md:mb-0 md:col-span-2 md:flex md:items-center md:justify-center">
                  <strong className="md:hidden">Date:</strong> {date}
                </p>
                <p className="mb-1 md:mb-0 md:col-span-2 md:flex md:items-center md:justify-center">
                  <strong className="md:hidden">Amount:</strong> Rs{" "}
                  {Number(amount).toLocaleString()}
                </p>
                <div className="flex gap-2 md:flex-col md:items-center md:justify-center md:col-span-2">
                  <div
                    className={`text-[10px] md:text-base px-3 py-1 md:px-4 rounded-full ${
                      status === "Completed"
                        ? "bg-[#DCFCE7] text-[#166534]"
                        : "bg-[#FEF9C3] text-[#8A5416]"
                    }`}
                  >
                    {status}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
