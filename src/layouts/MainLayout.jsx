import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const MainLayout = () => {
  const navLinkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-md transition-all duration-200 ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
    }`;
  return (
    <>
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
      <div className="flex justify-center items-center h-150 text-5xl">
        <Outlet />
      </div>

      <h1 className="text-5xl  left-[40%]  absolute bottom-10">Footer</h1>
    </>
  );
};

export default MainLayout;
