import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import DashBoad from "./Screens/DashBoad";
import Violate from "./Screens/Violate";
import Profile from "./Screens/Profile";

const App = () => {
  return (
    <div className="bg-slate-200  text-slate-500 select-none max-w-screen min-h-screen font-Poppins">
      <Routes>
        <Route index element={<LoginPage />} />
        <Route element={<HomePage />}>
          <Route path="/dashboard" element={<DashBoad />} />
          <Route path="/violated" element={<Violate />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
