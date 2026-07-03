import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-150 text-5xl">
        <Outlet />
      </div>

      <h1 className="text-5xl  left-[40%]  absolute bottom-10">Footer</h1>
    </>
  );
};

export default MainLayout;
