import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const handleLogout = () => {
    setUser({});
    navigate("/student/login");
  };
  return (
    <div>
      <h1>Welcome to Dashboard page</h1>
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={handleLogout}
          className="border-2 p-4 rounded-lg bg-blue-300 text-md"
        >
          log out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
