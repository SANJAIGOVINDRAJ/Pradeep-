import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Drawer from "../Components/Drawer";

const HomePage = () => {
  return (
    <div className=" max-w-screen  min-h-screen ">
      <Navbar />
      <div className=" pt-20 w-full h-full grid grid-cols-12">
        <div className=" w-full h-full col-span-2"><Drawer /> </div>
        <div className=" col-span-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
