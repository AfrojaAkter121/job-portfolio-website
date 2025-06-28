import React, { use } from "react";
import Header from "../../Component/Header";
import Sidebar from "../../Component/Sidebar";
import Navbar from "../../Shared/Navbar";
import ThemeContext from "../../Context/ThemeContext";

const Home = () => {
  const { isDark } = use(ThemeContext);
  return (
    <div
      className={`flex h-screen overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Sidebar - Fixed Width, Full Height with padding */}
      <div className="w-[300px] h-screen p-2 sticky top-0">
        <Sidebar />
      </div>

      {/* Main Content - Scrollable, padding around */}
      <div className="flex-1 overflow-y-auto p-4">
        <div
          className={`max-w-5xl mx-auto rounded-2xl min-h-screen ${
            isDark ? "bg-gray-800" : "bg-gray-100"
          } p-6`}
        >
          <Navbar />
          <Header />
          {/* scrollable content */}
        </div>
      </div>
    </div>
  );
};

export default Home;
