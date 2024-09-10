import React from "react";
import { Link } from "react-router-dom";
import logo from "../data/logo.webp";
const Navbar = () => {
  return (
    <div className=" flex fixed w-screen items-center justify-between px-20 p-5  bg-slate-800">
      <div className=" flex items-center justify-center space-x-2">
        <img src={logo} className="  rounded-md w-14 h-10 " />
        <p className=" text-white font-bold text-xl capitalize">
          Bannari amman institue of technology
        </p>
      </div>
      <Link
        to={"/"}
        className="  active:scale-95 bg-white p-2 px-5 text-slate-900 rounded-md"
      >
        Logout
      </Link>
    </div>
  );
};

export default Navbar;
