import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import ThemeContext from "../Context/ThemeContext";

const faqData = [
  {
    question: "Who are you and what do you do?",
    answer:
      "I'm Afroja, a passionate MERN stack developer who builds full-stack web applications with a focus on performance, responsive UI, and smooth user experience.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React.js, JavaScript (ES6+), Tailwind CSS, Firebase, Node.js, Express, and MongoDB. I also love building intuitive front-end interfaces.",
  },
  {
    question: "Can I download your CV?",
    answer:
      "Yes, absolutely! You can download my updated resume directly from the Home or About section — just click on the 'Download CV' button.",
  },
  {
    question: "Are you available for freelance or remote work?",
    answer:
      "Yes, I'm currently open to remote/freelance opportunities where I can contribute to meaningful projects, especially in front-end or full-stack roles.",
  },
];

const FaqSection = () => {
  const { isDark } = useContext(ThemeContext);
  const [openIndex, setOpenIndex] = useState(null);

  const textColor = isDark ? "text-white" : "text-gray-900 ";
  const bgColor = isDark ? "bg-gray-900" : "bg-gray-200";
  const activeBg = isDark ? "bg-amber-500 text-black" : "bg-teal-400 text-black";
  const normalBorder = isDark ? "border-amber-500" : "border-teal-400";
  const iconColor = isDark ? "text-white" : "text-black";

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={`py-16 px-4 md:px-10 ${bgColor} rounded-2xl mt-6 rounded-2xl`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold mb-8 text-center ${textColor}`}>
          Frequently Asked{" "}
          <span className={isDark ? "text-amber-400" : "text-teal-600"}>
            Questions
          </span>
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-lg overflow-hidden transition duration-300 ${normalBorder} ${
                  isOpen ? activeBg : "bg-transparent"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full flex justify-between items-center p-4 font-medium text-left focus:outline-none ${
                    isOpen ? "text-black" : textColor
                  }`}
                >
                  {faq.question}
                  <FaChevronDown
                    className={`transition-transform ${iconColor} ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`px-4 pb-4 text-sm ${
                        isOpen ? "text-black" : textColor
                      }`}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
