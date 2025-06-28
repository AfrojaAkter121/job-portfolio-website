import React, { useContext } from "react";
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from "react-icons/fi";
import { FaSkype } from "react-icons/fa";
import ThemeContext from "../Context/ThemeContext";
import { motion } from "framer-motion";

const Contact = () => {
  const { isDark } = useContext(ThemeContext);

  const bgColor = isDark ? "bg-gray-900" : "bg-gray-200";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const borderColor = isDark ? "border-gray-700" : "border-gray-300";
  const focusRing = isDark ? "focus:ring-amber-400" : "focus:ring-teal-500";
  const highlightColor = isDark ? "text-amber-400" : "text-teal-700";
  const iconColor = isDark ? "text-amber-400" : "text-teal-700";
  const btnBg = isDark ? "bg-white text-black" : "bg-black text-white";
  const btnIconBg = isDark
    ? "bg-amber-400 text-black"
    : "bg-teal-300 text-black";

  return (
    <div id="contact" className={`w-full py-16 px-4 md:px-10 ${bgColor} mt-6 rounded-2xl`}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <div>
          <p className="text-sm mb-2 text-gray-500">— Contact Me</p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-left max-w-2xl"
          >
            <h2 className={`text-4xl font-bold mb-4 ${textColor}`}>
              Let’s Talk for{" "}
              <span className={`${highlightColor} italic`}>
                Your Next Projects
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`mb-6 ${textColor} opacity-80`}
            >
              I’m always open to discussing product design work or partnership
              opportunities. Let’s build something amazing together!
            </motion.p>
          </motion.div>

          <div className={`space-y-4 ${textColor}`}>
            <div className="flex items-center gap-3">
              <FiPhone className={`text-xl ${iconColor}`} />
              <span>+8801314381390</span>
            </div>
            <div className="flex items-center gap-3">
              <FiMail className={`text-xl ${iconColor}`} />
              <span>afrojaakter10bd@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaSkype className={`text-xl ${iconColor}`} />
              <span>afroja.skype</span>
            </div>
            <div className="flex items-center gap-3">
              <FiMapPin className={`text-xl ${iconColor}`} />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Your Name", type: "text", placeholder: "Ex. John Doe" },
              { label: "Email", type: "email", placeholder: "your@email.com" },
              { label: "Phone", type: "tel", placeholder: "+8801XXXXXXXXX" },
            ].map((field, i) => (
              <div key={i}>
                <label
                  className={`block mb-1 text-sm font-medium ${textColor}`}
                >
                  {field.label} *
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className={`w-full px-4 py-2 rounded-md bg-transparent border ${borderColor} focus:outline-none focus:ring-2 ${focusRing} transition duration-200`}
                />
              </div>
            ))}

            {/* Select Fields */}
            {[
              { label: "I'm Interested in", options: ["Web Design", "Development", "Marketing"] },
              { label: "Budget Range (USD)", options: ["$500 - $1000", "$1000 - $5000", "$5000+"] },
              { label: "Country", options: ["Bangladesh", "USA", "India"] },
            ].map((select, i) => (
              <div key={i}>
                <label
                  className={`block mb-1 text-sm font-medium ${textColor}`}
                >
                  {select.label} *
                </label>
                <select
                  required
                  className={`w-full px-4 py-2 rounded-md bg-transparent border ${borderColor} focus:outline-none focus:ring-2 ${focusRing} transition duration-200`}
                >
                  <option className="text-black">Select</option>
                  {select.options.map((opt, idx) => (
                    <option className="text-black" key={idx}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* Message Box */}
          <div>
            <label className={`block mb-1 text-sm font-medium ${textColor}`}>
              Your Message *
            </label>
            <textarea
              rows="4"
              required
              placeholder="Write your message..."
              className={`w-full px-4 py-2 rounded-md bg-transparent border ${borderColor} focus:outline-none focus:ring-2 ${focusRing} transition duration-200`}
            ></textarea>
          </div>

          <button
            type="submit"
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 ${btnBg}`}
          >
            <span>Submit</span>
            <span className={`p-2 rounded-full ${btnIconBg}`}>
              <FiArrowRight />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
