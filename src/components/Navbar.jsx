import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  const navLinkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-md transition-all duration-200 ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
    }`;
  const handleLogin = () => {
    setUser({
      name: "Shashikant",

      role: "Student",
    });
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "Shashikant",
        role: "Student",
      }),
    );
  };
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  const { user, setUser } = useContext(AuthContext);

  return (
    <>
      <nav className="flex justify-around py-4 font-bold text-2xl">
        <NavLink className={navLinkClasses} to="/student" end>
          Home
        </NavLink>
        <NavLink className={navLinkClasses} to="/student/about">
          About
        </NavLink>
        {user ? (
          <button
            onClick={handleLogout}
            className="group relative overflow-hidden px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>

            <span className="relative flex items-center justify-center gap-2">
              🔐 Logout
            </span>
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="group relative overflow-hidden px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>

            <span className="relative flex items-center justify-center gap-2">
              🔐 Login
            </span>
          </button>
        )}
      </nav>
    </>
  );
};

export default Navbar;
