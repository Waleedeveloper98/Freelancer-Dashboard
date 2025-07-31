import React from "react";
import { useNavigate } from "react-router-dom";

const SignupBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/signup")}
      type="button"
      className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200 shadow-lg whitespace-nowrap cursor-pointer"
    >
      Sign Up
    </button>
  );
};

export default SignupBtn;
