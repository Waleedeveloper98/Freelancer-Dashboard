import {
  CircleUser,
  FolderKanban,
  LayoutDashboard,
  ScrollText,
  Settings,
} from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const sideBar = [
    { icon: LayoutDashboard, name: "Dashboard", location: "/" },
    { icon: FolderKanban, name: "Projects", location: "/projects" },
    { icon: ScrollText, name: "Reports", location: "/reports" },
    { icon: Settings, name: "Settings", location: "/settings" },
  ];
  return (
    <div className="hidden sticky bg-zinc-100 text-[#33435A] dark:bg-[#303150] dark:text-white w-1/4 lg:w-1/5 h-screen pt-10 sm:flex flex-col gap-10 px-4 md:pt-6">
      <ul className="flex flex-col gap-6">
        {sideBar.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                className={`flex items-center gap-2 lg:gap-3`}
                to={`${item.location}`}
              >
                {({ isActive }) => (
                  <>
                    <item.icon
                      className={`w-5 h-5 transition-all duration-200 ${
                        isActive ? "text-blue-500" : ""
                      }`}
                    />
                    <span className="text-lg lg:text-base">{item.name}</span>
                  </>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
