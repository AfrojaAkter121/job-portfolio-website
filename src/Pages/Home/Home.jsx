import React, { use } from "react";
import Header from "../../Component/Header";
import Sidebar from "../../Component/Sidebar";
import Navbar from "../../Shared/Navbar";
import ThemeContext from "../../Context/ThemeContext";
import Contact from "../../Component/Contact";
import FaqSection from "../../Component/FaqSection";
import SkillMarquee from "../../Component/SkillMarquee";
import About from "../../Component/About";
import { Projects } from "../../Component/Projects";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const { isDark, sidebar } = use(ThemeContext);

  return (
    <div
      className={`flex h-screen overflow-hidden scroll-smooth ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
      {/* Sidebar - Fixed Width, Full Height */}
      <AnimatePresence>
        {sidebar && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="w-[300px] h-screen pr-2 sticky top-0 z-50"
          >
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <motion.div
          animate={{
            width: sidebar ? 'max-w-5xl' : 'max-w-7xl', // <-- Main Animation Change
            transition: { duration: 1.4, ease: "easeInOut" },
          }}
          className={`${
            sidebar ? "max-w-5xl" : "max-w-7xl"
          } mx-auto min-h-screen ${
            isDark ? "bg-gray-800" : "bg-white"
          } pt-5 transition-all duration-500 ease-in-out`}
        >
          <Navbar />
          <Header />
          <About />
          <SkillMarquee />
          <Projects />
          <Contact />
          <FaqSection />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
