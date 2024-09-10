import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Drawer = () => {
  const navigation = [
    {
      name: "dashboard",
      path: "/dashboard",
    },
    {
      name: "Violated",
      path: "/violated",
    },
  ];
  const [currentstate, setcurrentstate] = useState(null);
  useEffect(() => {
    if (!currentstate) {
      setcurrentstate(navigation && navigation[0]?.name);
    }
  }, []);
  console.log(navigation);
  return (
    <div className="p-2 w-full min-h-screen space-y-5 py-5 bg-slate-500">
      <div className=" w-full space-y-2">
        {navigation &&
          navigation?.map((items) => (
            <div>
              <Link
                to={items.path}
                className={` font-semibold  rounded-md flex p-2 px-5 w-full ${
                  currentstate && currentstate == items.name
                    ? "bg-slate-800 text-white"
                    : " text-slate-800"
                }`}
                onClick={() => {
                  setcurrentstate(items.name);
                }}
              >
                {items.name}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Drawer;
