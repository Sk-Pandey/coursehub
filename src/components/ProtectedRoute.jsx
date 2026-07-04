import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate to="/student/login" />;
};

export default ProtectedRoute;
