import React from "react";
import MainBody from "./MainBody";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <div className="flex">
      <SideBar />
      <MainBody />
    </div>
  );
};

export default Dashboard;
