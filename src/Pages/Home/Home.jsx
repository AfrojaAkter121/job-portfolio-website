import React, { use } from "react";
import Header from "../../Component/Header";
import Sidebar from "../../Component/Sidebar";
import Navbar from "../../Shared/Navbar";
import ThemeContext from "../../Context/ThemeContext";
import Contact from "../../Component/Contact";
import FaqSection from "../../Component/FaqSection";

const Home = () => {
  const { isDark } = use(ThemeContext);
  return (
    <div
      className={`flex h-screen overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {/* Sidebar - Fixed Width, Full Height with padding */}
      <div className="w-[300px] h-screen p-2 sticky top-0 rounded-2xl">
        <Sidebar />
      </div>

      {/* Main Content - Scrollable, padding around */}
      <div className="flex-1 overflow-y-auto ">
        <div
          className={`max-w-5xl mx-auto min-h-screen ${
            isDark ? "bg-gray-800" : "bg-white"
          } p-6`}
        >
          <Navbar />
          <Header />
          <Contact></Contact>
          <FaqSection></FaqSection>
        </div>
      </div>
    </div>
  );
};

export default Home;
