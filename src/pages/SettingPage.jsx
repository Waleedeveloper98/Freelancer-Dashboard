import {
  CircleAlert,
  Heart,
  Mail,
  Moon,
  Settings,
  Sun,
  Trash2,
} from "lucide-react";
import React, { useContext } from "react";
import { adminContext } from "../context/AdminContextProvider";
import { themeContext } from "../context/ThemeContextProvider";

const SettingPage = () => {
  const { setIsClearDataPopupOpen } = useContext(adminContext);
  const { theme, toggleTheme } = useContext(themeContext);
  const themeCardClass =
    "rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm px-3 py-2 flex items-center justify-between h-26";

  const getSupport = () => {
    window.location.href =
      "mailto:yourEmail@example.com?subject=Support%20Needed&body=Hello%20I%20need%20help%20with...";
  };

  return (
    <>
      <div>
        {/* Changed bg-white to bg-blue-100 for demonstration */}
        <div className="flex hide-scrollbar bg-gray-50 dark:bg-gray-900 dark:text-white ">
          {/* <Sidebar /> */}
          <div className="w-full min-h-screen md:h-screen md:overflow-y-auto pt-5 px-3 md:px-6 md:max-w-5xl md:mx-auto">
            <div className="settings-top flex flex-col gap-2">
              <div className="flex gap-2 text-3xl items-center font-semibold">
                <Settings className="w-8 h-8 text-blue-500" />
                <h3 className="text-gray-900 dark:text-white">Settings</h3>
              </div>
              <p className="text-sm pr-10 text-[#4B5563] dark:text-[#C6CBD1]">
                Manage your app preferences and account settings
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-4 ">
              <div className={`theme-preference ${themeCardClass}`}>
                <div className="left flex  items-center gap-2">
                  {theme === "dark" ? (
                    <Moon className="text-sky-500" />
                  ) : (
                    <Sun className="text-yellow-500" />
                  )}
                  <div>
                    <h3 className="font-semibold text-lg text-[#111827] dark:text-white">
                      Theme Preference
                    </h3>
                    <h6 className="text-xs w-4/5 text-[#4B5563] dark:text-[#C6CBD1]">
                      Choose between light and dark mode
                    </h6>
                  </div>
                </div>
                <div className="right">
                  <button
                    onClick={toggleTheme}
                    className={`toggle w-15 h-8 py-1 px-[3px] border-2 relative rounded-full cursor-pointer border-none flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1  dark:focus:ring-offset-gray-800 ${
                      theme === "dark" ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white transition-all duration-300 inline-block ${
                        theme === "dark" ? "translate-x-8" : "translate-x-0"
                      }`}
                    ></div>
                  </button>
                </div>
              </div>
              <div className={`data-management ${themeCardClass}`}>
                <div className="left flex  items-center gap-2">
                  <Trash2 className="text-red-500" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      Data Management
                    </h3>
                    <h6 className="text-xs w-4/5 text-[#4B5563] dark:text-[#C6CBD1]">
                      Clear all stored project data and preferences
                    </h6>
                  </div>
                </div>
                <div className="right">
                  <button
                    onClick={() => setIsClearDataPopupOpen(true)}
                    className="text-xs cursor-pointer bg-red-500 text-white font-medium p-2 rounded-md"
                  >
                    Clear Project Data
                  </button>
                </div>
              </div>
              <div className={`help-support ${themeCardClass}`}>
                <div className="left flex  items-center gap-2">
                  <Mail className="text-green-500" />
                  <div>
                    <h3 className="font-semibold text-lg text-[#111827] dark:text-white">
                      Help & Support
                    </h3>
                    <h6 className="text-xs w-4/5 text-[#4B5563] dark:text-[#C6CBD1]">
                      Get help with questions or report issues
                    </h6>
                  </div>
                </div>
                <div className="right">
                  <button
                    onClick={getSupport}
                    className="text-xs bg-green-500 text-white font-medium p-2 rounded-md"
                  >
                    Need Help? Contact Support
                  </button>
                </div>
              </div>
              <div className="about mb-20 md:mb-32  rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm min-h-26 flex  flex-col px-3 py-2">
                <div className="top flex flex-col gap-2 border-b-1 pb-3">
                  <div className="flex items-center gap-2">
                    <CircleAlert className="text-blue-500" />
                    <h3 className="font-semibold text-lg text-[#111827] dark:text-white">
                      About the App
                    </h3>
                  </div>
                  <h6 className="text-xs md:text-sm w-4/5 text-[#4B5563] dark:text-[#C6CBD1] pl-8 ">
                    This is a modern React application built with JavaScript and
                    Tailwind CSS. It features a responsive design, theme
                    management, and clean user interface components for an
                    optimal user experience.
                  </h6>
                </div>
                <div className="bottom pt-2 flex flex-col gap-4 md:flex-row md:justify-between md:pl-6 md:pr-40">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-medium text-[#111827] dark:text-white">
                      Website Version
                    </h3>
                    <h6 className="text-xs text-[#4B5563] dark:text-[#C6CBD1]">
                      V1.0.0
                    </h6>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-medium text-[#111827] dark:text-white">
                      Developer
                    </h3>
                    <h6 className="text-xs text-[#4B5563] dark:text-[#C6CBD1]">
                      Build with{" "}
                      <Heart className="inline-block fill-red-500 outline-none w-5 h-5" />{" "}
                      by Your Team
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingPage;
