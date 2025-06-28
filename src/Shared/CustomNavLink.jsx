import React from "react";
import { NavLink as RouterNavLink } from "react-router";

const CustomNavLink = ({ address, icon: Icon }) => {
  return (
    <RouterNavLink
      to={address}
    >
      <Icon className="text-2xl" />
    </RouterNavLink>
  );
};

export default CustomNavLink;
