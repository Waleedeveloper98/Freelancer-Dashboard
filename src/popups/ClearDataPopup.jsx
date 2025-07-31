import React, { useContext } from "react";
import { adminContext } from "../context/AdminContextProvider";
import toast from "react-hot-toast";

const ClearDataPopup = () => {
  const {
    setFormDataCollection,
    isClearDataPopupOpen,
    setIsClearDataPopupOpen,
    setStats,
    setLineChartData,
    setPieChartData,
    setRecentProjects,
    setDataByClientAmount,
    setProjectsCount,
  } = useContext(adminContext);

  // const notify = () => toast.success("Data successfully deleted.");

  const handleDelete = () => {
    try {
      localStorage.removeItem("projectsData");

      setFormDataCollection([]);
      setStats({
        totalCompletedAmount: 0,
        totalPending: 0,
        totalEarnings: 0,
        thisMonth: 0,
      });
      setLineChartData([]);
      setPieChartData([]);
      setRecentProjects([]);
      setDataByClientAmount([]);
      setProjectsCount({
        totalProjects: 0,
        completedProjects: 0,
        pendingProjects: 0,
      });

      setIsClearDataPopupOpen(false);
      toast.success("Data successfully deleted."); // Move it after the state update
      console.log("Data deleted and popup closed");
    } catch (err) {
      console.error("Delete failed", err);
      toast.error("Failed to delete data.");
    }
  };

  const handleCancel = () => {
    setIsClearDataPopupOpen(false);
  };

  if (!isClearDataPopupOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="w-4/5 sm:max-w-md bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-center text-lg font-medium text-black">
          Are you sure you want to delete the data?
        </h3>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={handleCancel}
            className="px-4 py-2 rounded-md bg-zinc-400 text-white hover:bg-zinc-500 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClearDataPopup;
