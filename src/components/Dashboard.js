import React from "react";
import MainBody from "./MainBody";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <div className="flex h-full">
      <div className="bg-zinc-100 flex">
        <SideBar />
        <MainBody />
      </div>
    </div>
  );
};

export default Dashboard;
