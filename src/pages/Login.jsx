import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  return (
    <div>
      {<h1>{user ? `Welcome ${user.name}` : "Log Please"}</h1>}
      <div className="flex justify-center items-center mt-6"></div>
    </div>
  );
};

export default Login;
