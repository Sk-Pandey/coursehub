import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      <h1>Welcome to log in page</h1>
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={handleLogin}
          className="border-2 p-4 rounded-lg bg-blue-300 text-md"
        >
          log in
        </button>
      </div>
    </div>
  );
};

export default Login;
