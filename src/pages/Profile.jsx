import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>Welcome to Profile Page</h1>
      <Outlet />
      <div
        onClick={handleBack}
        className="flex justify-center items-center mt-6"
      >
        <button className="border-2 p-4 rounded-lg bg-blue-300 text-md">
          Back
        </button>
      </div>
    </div>
  );
};

export default Profile;
