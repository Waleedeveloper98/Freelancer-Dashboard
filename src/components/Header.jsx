import { Menu, X } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContextProvider";
import LogoutBtn from "./LogoutBtn";
import LoginBtn from "./LoginBtn";
import SignupBtn from "./SignupBtn";

const Header = () => {
  const [isHideMenu, setIsHideMenu] = useState(false);
  const { user } = useContext(authContext);

  const username = user?.email?.split("@")[0];

  const menuBar = [
    { name: "Dashboard", location: "/" },
    { name: "Projects", location: "/projects" },
    { name: "Reports", location: "/reports" },
    { name: "Settings", location: "/settings" },
  ];
  return (
    <>
      <div className="relative md:fixed inset-0 bg-gray-50 text-gray-800 dark:bg-gray-900 z-50 sm:hidden w-full h-20 border-b border-gray-800 dark:text-white  flex items-center justify-between px-3">
        <h3 className="text-2xl font-semibold roboto">FreelanceMint</h3>
        <div onClick={() => setIsHideMenu((prev) => !prev)}>
          {!isHideMenu ? (
            <Menu className="w-8 h-8" />
          ) : (
            <X className="w-8 h-8" />
          )}
        </div>
      </div>
      <div className="bgOne hidden sm:flex items-center justify-between px-4 pr-10 w-full h-20 text-white">
        <h3 className="text-3xl font-semibold roboto">FreelanceMint</h3>
        <div className="flex items-center justify-end w-1/2 gap-5">
          <div className="flex items-start gap-2">
            <h4 className="text-sm text-gray-400">
              {user ? "Username:" : ""}{" "}
              <span className="text-base text-white">
                {user ? username : "Guest"}
              </span>
            </h4>
            <div className="btns"></div>
          </div>
          <div className="btns flex items-center gap-3">
            {user ? (
              <LogoutBtn />
            ) : (
              <>
                <SignupBtn />
                <LoginBtn />
              </>
            )}
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={`bg-gray-50 textwh dark:bg-gray-800 text-gray-700 sm:hidden w-full h-[70vh] absolute inset-0 z-40 shadow-sm dark:text-white pt-28 px-3 transition-all duration-300 ${
          !isHideMenu ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <ul
          className={`w-full flex items-center justify-center flex-col gap-4 pt-10`}
        >
          {menuBar.map((menu) => {
            return (
              <li>
                <Link
                  onClick={() => setIsHideMenu(false)}
                  className="text-lg font-medium"
                  to={`${menu.location}`}
                >
                  {menu.name}
                </Link>
              </li>
            );
          })}
          <div className="btns flex items-center gap-3">
            {user ? (
              <LogoutBtn />
            ) : (
              <>
                <SignupBtn />
                <LoginBtn />
              </>
            )}
          </div>
        </ul>
      </div>
    </>
  );
};

export default Header;
