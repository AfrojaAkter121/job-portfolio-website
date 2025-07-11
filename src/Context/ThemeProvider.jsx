// ThemeProvider.jsx
import React, { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(true);

  // ✅ Always default to dark mode (unless stored in localStorage)
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme === "dark" : true; // default to dark
  });

  // ✅ Apply theme to <html data-theme="">
  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  // ✅ Toggle theme between dark and light
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // ✅ Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{ toggleTheme, isDark, sidebar, toggleSidebar }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
