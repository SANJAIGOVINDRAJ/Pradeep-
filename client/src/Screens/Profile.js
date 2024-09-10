import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Profile = () => {
  const { state } = useLocation();
const navigation = useNavigate()
  return (
    <div className=" w-full h-full p-5">
      <div className=" flex space-x-10">
        <img
          src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
          alt="profile"
        />
        <div className=" bg-white p-10 px-20 flex space-y-5 text-xl flex-col">
            <p className="  font-bold">INFORMATION OF VEHICLE</p>
          <p>
            <span className=" font-bold ">NAME : </span>
            {state.name}
          </p>
          <p>
            <span className=" font-bold ">EMAIL : </span>
            {state.email}
          </p>
          <p>
            <span className=" font-bold ">VEHICLE NO : </span>
            {state.vehicleNo}
          </p>
          <p>
            <span className=" font-bold ">VEHICLE TYPE : </span>
            {state.type}
            <span className="">Wheeler</span>
          </p>
          <div className=" flex  space-x-10 ">
            <p>
              <span className=" font-bold ">IN TIME : </span>
              {state.in}
            </p>
            <p>
              <span className=" font-bold ">OUT TIME : </span>
              {state.out}
            </p>
          </div>
          <div className=" flex flex-col space-y-2">
            <p className="  font-bold ">REASON FOR VIOLATION :</p>
            <p>
              This question usually stems from the fact that you're using React
              class components, which don't support hooks. In React Router v6,
              we fully embraced hooks and use them to share all the router's
              internal state.
            </p>
          </div>
        </div>
      </div>
      <button className=" bg-slate-800 text-white px-5 p-2 rounded-md mt-5" onClick={() => navigation("/dashboard")}>Back</button>
    </div>
  );
};

export default Profile;
