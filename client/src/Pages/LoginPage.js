import React from "react";
import logo from "../data/logo.webp";
import {Link} from 'react-router-dom'
const LoginPage = () => {

  return (
    <div className=" max-w-screen min-h-screen bg-slate-200 flex items-center  justify-center ">
      <div className=" bg-white p-10 flex flex-col items-center justify-center space-y-10 rounded-xl">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Bannari_Amman_Institute_of_Technology_logo.png/512px-Bannari_Amman_Institute_of_Technology_logo.png" alt="logo" className=" aspect-square  h-60" />
        <Link to={"dashboard"} className="  bg-slate-800 active:scale-95 transition-all duration-200 ease-in-out px-10 rounded-md text-white capitalize p-2">login with Google</Link>
      </div>
    </div>
  );
};

export default LoginPage;
