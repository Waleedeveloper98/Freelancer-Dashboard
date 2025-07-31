import React from "react";
import { useNavigate } from "react-router-dom";

const LoginBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/login")}
      type="button"
      className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200 shadow-lg cursor-pointer"
    >
      Login
    </button>
  );
};

export default LoginBtn;
