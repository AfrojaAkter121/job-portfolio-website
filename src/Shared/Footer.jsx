import React, { use } from "react";
import ThemeContext from "../Context/ThemeContext";

const Footer = () => {
  const { isDark } = use(ThemeContext);

  const bgColor = isDark ? "bg-amber-500" : "bg-teal-700";
  const textColor = isDark ? "text-black" : "text-gray-100";
  const borderColor = isDark ? "border-white/30" : "border-white/20";

  return (
    <div className={`w-full ${bgColor} ${textColor} py-4 border-t ${borderColor}`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
        <p>&copy; {new Date().getFullYear()} AfrojaCrafts. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#privacy" className="hover:underline">Privacy</a>
          <a href="#terms" className="hover:underline">Terms</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
