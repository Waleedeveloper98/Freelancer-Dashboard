import React, { createContext, useEffect, useState } from "react";

export const themeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <themeContext.Provider value={{ theme, setTheme,toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
