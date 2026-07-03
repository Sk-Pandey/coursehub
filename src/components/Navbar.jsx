import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navLinkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-md transition-all duration-200 ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
    }`;
  return (
    <nav className="flex justify-around py-4 font-bold text-2xl">
      <NavLink className={navLinkClasses} to="/student" end>
        Home
      </NavLink>
      <NavLink className={navLinkClasses} to="/student/about">
        About
      </NavLink>
      <NavLink className={navLinkClasses} to="/student/login">
        login
      </NavLink>
    </nav>
  );
};

export default Navbar;
