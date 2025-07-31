import React, { useContext } from "react";
import { authContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const { logout } = useContext(authContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      type="button"
      className="flex-1 bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200 shadow-lg cursor-pointer"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
