// ThemeProvider.jsx
import React, { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";


const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";

    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? true
      : false;
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      // পেজ রিলোড করো থিম পরিবর্তনের পরে
      window.location.reload();
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{toggleTheme, isDark}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
