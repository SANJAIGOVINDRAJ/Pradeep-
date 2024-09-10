import React from "react";
import { useNavigate } from "react-router-dom";

const Violate = () => {
  const data = [
    {
      id: 1,
      name: "Kanishka Shree",
      email: "kansihkashree@gmail.com",
      vehicleNo: "ABC123",
      type: "4",
      in: "10:00 AM",
      out: "12:00 PM",
    },
    {
      id: 2,
      name: "Jayakumar",
      email: "Jayakumar@gmail.com",
      vehicleNo: "DEF456",
      type: "2",
      in: "09:00 AM",
      out: "11:00 AM",
    },
    {
      id: 3,
      name: "Hithesh",
      email: "Hithesh@gmail.com",
      vehicleNo: "GHI789",
      type: "2",
      in: "08:00 AM",
      out: "10:00 AM",
    },
    {
      id: 4,
      name: "Manimegala",
      email: "Manimegala@gmail.com",
      vehicleNo: "JKL012",
      type: "4",
      in: "07:00 AM",
      out: "09:00 AM",
    },
    {
      id: 5,
      name: "Emily Doe",
      email: "emily.doe@gmail.com",
      vehicleNo: "MNO321",
      type: "2",
      in: "06:00 AM",
      out: "08:00 AM",
    },
    {
      id: 6,
      name: "John Doe",
      email: "john.doe@gmail.com",
      vehicleNo: "ABC123",
      type: "4",
      in: "10:00 AM",
      out: "12:00 PM",
    },
    {
      id: 7,
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
      vehicleNo: "DEF456",
      type: "2",
      in: "09:00 AM",
      out: "11:00 AM",
    },
  ];
  const navigaiton = useNavigate()
  return (
    <div className=" flex w-full p-5 rounded-md ">
      <table class=" w-full  table-fixed  overflow-hidden   ">
        <thead className="overflow-hidden rounded-md">
          <tr className=" bg-slate-800   border-4 border-slate-200 border-spacing-5  text-white ">
            <th className=" w-10 p-5">s.no</th>
            <th className=" p-5">name</th>
            <th className=" p-5">email</th>
            <th className=" p-5">vehicle No</th>
            <th className=" p-5">type</th>
            <th className=" p-5">In</th>
            <th className=" p-5">Out</th>
          </tr>
        </thead>
        <tbody className=" space-y-5">
          {data &&
            data?.map((item) => (
              <tr
                onClick={() => {
                  navigaiton("/profile", { state: item });
                }}
                className=" hover:scale-[0.99] transition-all duration-100 ease-in-out border-4 font-medium border-slate-200 border-spacing-5  bg-white text-center"
              >
                <td className=" p-5">{item.id}</td>
                <td className=" p-5">{item.name}</td>
                <td className=" text-blue-500 p-5">{item.email}</td>
                <td className=" p-5">{item.vehicleNo}</td>
                <td className=" p-5">{item.type}</td>
                <td className=" p-5">{item.in}</td>
                <td className=" p-5">{item.out}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Violate;
