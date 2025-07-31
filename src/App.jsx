import React from "react";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";
import Form from "./components/Form";
import Reports from "./pages/Reports";
import Settings from "./pages/SettingPage";
import ClearDataPopup from "./popups/ClearDataPopup";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div className="poppins text-white md:max-h-screen md:overflow-y-hidden">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route
            path="/projects"
            element={
              <PrivateRoute>
                <Projects />
              </PrivateRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <PrivateRoute>
                <Reports />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Form />
      {/* popups */}
      <ClearDataPopup />
      <Toaster />
    </div>
  );
};

export default App;
