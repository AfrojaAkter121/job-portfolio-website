import React, { useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../Context/ThemeContext";
import myImg from "../assets/WhatsApp Image 2025-06-15 at 23.21.44_c90ec495.jpg";

const About = () => {
  const { isDark } = useContext(ThemeContext);

  const bgColor = isDark ? "bg-gray-900" : "bg-gray-100";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const highlightColor = isDark ? "text-amber-400" : "text-teal-600";
  const borderColor = isDark ? "border-amber-800" : "border-teal-800";

  return (
    <section
      id="about"
      className={`${bgColor} py-20 px-6 md:px-12 rounded-2xl max-w-7xl mx-auto`}
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Responsive Image Container */}
        <div className="relative w-full max-w-sm h-[320px] md:w-[300px] md:h-[300px] mx-auto">
          {/* Image 1 */}
          <motion.img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=400&q=80"
            alt="About Image 1"
            className={`w-[250px] h-[250px] md:w-[280px] md:h-[240px] object-cover rounded-lg shadow-lg md:absolute border-4 ${borderColor} z-10
              bottom-20 right-6 md:bottom-20 md:right-20
            `}
            whileInView={{ y: [0, -30, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
          />

          {/* Image 2 */}
          <motion.img
            src={myImg}
            alt="About Image 2"
            className={`w-[250px] h-[250px] md:w-[280px] md:h-[240px] object-cover rounded-lg shadow-lg absolute border-4 ${borderColor} z-20
              -top-0 left-6 md:top-30 md:left-10
            `}
            whileInView={{ x: [0, 30, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            viewport={{ once: false, amount: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
