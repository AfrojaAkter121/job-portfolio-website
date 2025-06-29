import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import ThemeContext from "../Context/ThemeContext";
import skillData from "../../public/skill.json"; // JSON data file

const SkillMarquee = () => {
  const { isDark } = useContext(ThemeContext);

  const bgColor = isDark ? "bg-gray-900" : "bg-gray-200";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const innerCardBg = isDark ? "bg-gray-800" : "bg-white";

  return (
    <section id="skills"  className={`py-14 px-5 ${bgColor} mt-6 rounded-2xl scroll-mt-[100px]`}>
      <h2 className={`text-3xl font-bold mb-6 text-center ${textColor}`}>
        Tech <span className={isDark ? "text-amber-400" : "text-teal-600"}>Skills</span>
      </h2>

      <Marquee pauseOnHover gradient={false} speed={55}>
        <div className="flex ">
          {skillData.map((skill) => (
            <motion.div
              key={skill.id}
              whileHover={{ scale: 1.05 }}
              className="animated-border p-[2px] mr-8 rounded-xl max-w-[280px] my-6"
            >
              <div className={`h-full p-5 rounded-xl ${innerCardBg}`}>
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-14 h-14 mb-4"
                />
                <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                  {skill.title}
                </h3>
                <p className={`text-sm ${textColor} opacity-80`}>
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Marquee>
      <Marquee direction="right" pauseOnHover gradient={false} speed={55}>
        <div className="flex ">
          {skillData.map((skill) => (
            <motion.div
              key={skill.id}
              whileHover={{ scale: 1.05 }}
              className="animated-border p-[2px] mr-8 rounded-xl max-w-[280px] my-6"
            >
              <div className={`h-full p-5 rounded-xl ${innerCardBg}`}>
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-14 h-14 mb-4"
                />
                <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                  {skill.title}
                </h3>
                <p className={`text-sm ${textColor} opacity-80`}>
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default SkillMarquee;
