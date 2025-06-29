import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AboutImages from "./AboutImages";
import "aos/dist/aos.css";

const About = () => {
  const { isDark } = useContext(ThemeContext);

  const bgColor = isDark ? "bg-gray-900" : "bg-gray-100";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const highlightColor = isDark ? "text-amber-400" : "text-teal-600";



  return (
    <section
      id="about"
      // data-aos="fade-up"
      className={`${bgColor} scroll-mt-[100px] py-16 px-6 md:px-12 rounded-2xl max-w-7xl mx-auto mt-6`}
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left side - Images */}
        <div className="md:w-1/2 flex gap-6">
            <AboutImages></AboutImages>
        </div>

        {/* Right side - About Text */}
        <div className="md:w-1/2">
          <h2
            className={`text-4xl font-bold mb-6 ${textColor}`}
          >
            About Me
          </h2>
          <p className={`leading-relaxed text-lg ${textColor} opacity-90`}>
            Hi, I’m <span className={highlightColor}>Afroja</span>, a passionate MERN stack
            developer experienced in building dynamic, responsive, and
            user-friendly web applications. I specialize in crafting
            seamless interfaces and robust backends, turning ideas into
            beautiful digital experiences. Continuously exploring new
            technologies, I enhance my skills in React, Node.js, MongoDB,
            and more.
          </p>

          <a
            href="/Afroja-CV.pdf"
            download
            className={`inline-block mt-8 px-6 py-3 rounded-md font-semibold shadow-md transition-colors duration-300 ${
              isDark
                ? "bg-amber-400 text-gray-900 hover:bg-amber-500"
                : "bg-teal-500 text-white hover:bg-teal-600"
            }`}
          >
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
