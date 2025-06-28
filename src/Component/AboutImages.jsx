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
        {/* Left: Animated Images */}
        <div className="relative w-72 h-72">
          {/* Up-Down Animation on Scroll */}
          <motion.img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=400&q=80"
            alt="About Image 1"
            className={`w-70 h-60 object-cover rounded-lg shadow-lg absolute bottom-20 right-20 border-4 ${borderColor}`}
            whileInView={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
          />

          {/* Left-Right Animation on Scroll */}
          <motion.img
            src={myImg}
            alt="About Image 2"
            className={`w-70 h-60 object-cover rounded-lg shadow-lg absolute top-30 left-10 border-4 ${borderColor}`}
            whileInView={{ x: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            viewport={{ once: false, amount: 0.5 }}
          />
        </div>

     
      </div>
    </section>
  );
};

export default About;
