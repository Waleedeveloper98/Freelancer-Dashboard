import React, { createContext, useEffect, useState } from "react";
import data from "../allData.js";

export const adminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [allData, setAllData] = useState(data);
  const [formDataCollection, setFormDataCollection] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [isClearDataPopupOpen, setIsClearDataPopupOpen] = useState(false);

  const [lineChartData, setLineChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [projectsListData, setProjectsListData] = useState([]);
  const [recentProjects, setRecentProjects] = useState([]);
  const [projectsCount, setProjectsCount] = useState({});
  const [dataByClientAmount, setDataByClientAmount] = useState([]);

  const [stats, setStats] = useState({
    totalCompletedAmount: 0,
    totalPending: 0,
    totalEarnings: 0,
    thisMonth: 0,
  });

  // // Load data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("projectsData");
    if (saved) {
      setFormDataCollection(JSON.parse(saved));
    }
  }, []);

  // Update dashboard-related data when formDataCollection changes
  useEffect(() => {
    if (!formDataCollection.length) return;

    const completedProjects = formDataCollection.filter(
      (p) => p.status === "Completed"
    );
    const pendingProjects = formDataCollection.filter(
      (p) => p.status === "Pending"
    );

    updateRecentProjects();
    updateProjectsList();
    updateProjectsCount();
    updatePieChart(completedProjects.length, pendingProjects.length);
    updateLineChart(completedProjects);
    updateStats(completedProjects, pendingProjects);
    updateClientWiseAmount();
    localStorage.setItem("projectsData", JSON.stringify(formDataCollection));
  }, [formDataCollection]);

  // Helper: Sort and set recent projects
  const updateRecentProjects = () => {
    const sorted = [...formDataCollection].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setRecentProjects(sorted);
  };

  // Helper: Format project list for table
  const updateProjectsList = () => {
    const formatted = formDataCollection.map((item) => ({
      id: item.id,
      clientName: item.clientName,
      projectName: item.projectName,
      amount: Number(item.amount),
      status: item.status,
      date: new Date(item.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    }));
    setProjectsListData(formatted);
  };

  // Helper: Count total/completed/pending projects
  const updateProjectsCount = () => {
    const total = formDataCollection.length;
    const completed = formDataCollection.filter(
      (p) => p.status === "Completed"
    ).length;
    const pending = formDataCollection.filter(
      (p) => p.status === "Pending"
    ).length;

    setProjectsCount({
      totalProjects: total,
      completedProjects: completed,
      pendingProjects: pending,
    });
  };

  // Helper: Pie chart data
  const updatePieChart = (completed, pending) => {
    setPieChartData([
      { status: "Completed", value: completed },
      { status: "Pending", value: pending },
    ]);
  };

  // Helper: Line chart data
  const updateLineChart = (completedProjects) => {
    const chartData = completedProjects.map((item) => ({
      month: new Date(item.date).toLocaleString("default", { month: "short" }),
      amount: Number(item.amount),
    }));
    setLineChartData(chartData);
  };

  // Helper: Stats
  const updateStats = (completed, pending) => {
    const totalCompletedAmount = completed.reduce(
      (acc, item) => acc + Number(item.amount),
      0
    );
    const totalPending = pending.reduce(
      (acc, item) => acc + Number(item.amount),
      0
    );
    const totalEarnings = formDataCollection.reduce(
      (acc, item) => acc + Number(item.amount),
      0
    );

    const now = new Date();
    const thisMonth = formDataCollection
      .filter((item) => {
        const d = new Date(item.date);
        return (
          d.getMonth() === now.getMonth() &&
          d.getFullYear() === now.getFullYear()
        );
      })
      .reduce((acc, item) => acc + Number(item.amount), 0);

    setStats({ totalCompletedAmount, totalPending, totalEarnings, thisMonth });
  };

  // Helper: Amount earned per client
  const updateClientWiseAmount = () => {
    const grouped = formDataCollection.reduce((acc, { clientName, amount }) => {
      acc[clientName] = (acc[clientName] || 0) + Number(amount);
      return acc;
    }, {});
    const clientChartData = Object.entries(grouped).map(([name, value]) => ({
      name,
      value,
    }));
    setDataByClientAmount(clientChartData);
  };

  return (
    <adminContext.Provider
      value={{
        allData,
        formVisible,
        setFormVisible,
        formDataCollection,
        setFormDataCollection,
        isClearDataPopupOpen,
        setIsClearDataPopupOpen,
        lineChartData,
        pieChartData,
        recentProjects,
        projectsListData,
        projectsCount,
        dataByClientAmount,
        ...stats,
        setStats,
        setLineChartData,
        setPieChartData,
        setRecentProjects,
        setDataByClientAmount,
        setProjectsCount,
      }}
    >
      {children}
    </adminContext.Provider>
  );
};

export default AdminContextProvider;
