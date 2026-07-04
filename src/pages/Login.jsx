import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const handleLogin = () => {
    setUser({
      name: "Shashikant",

      role: "Student",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      {user && <h1>Welcome {user.name}</h1>}

      <div className="flex justify-center items-center mt-6">
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
      </div>
    </div>
  );
};

export default Login;
