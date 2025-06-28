import React, { useContext } from "react";
import { NavLink } from "react-router";
import ThemeContext from "../Context/ThemeContext";


const CustomNavLink = ({ address, icon: Icon }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <NavLink
      to={address}
      className={({ isActive }) =>
        `${isActive
          ? isDark
            ? "bg-amber-400 text-gray-900"
            : "bg-teal-300"
          : "hover:bg-opacity-40"
        } p-3 rounded-full transition duration-300 ease-in-out ${
          isDark ? "" : "text-gray-800"
        }`
      }
    >
      <Icon className="text-2xl" />
    </NavLink>
  );
};

export default CustomNavLink;
