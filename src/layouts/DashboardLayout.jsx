import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <div className="h-15 text-3xl text-center">Top Bar</div>
      <div className="flex justify-around items-center">
        <div className="w-15 text-2xl h-50 ">Sidebar</div>
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
