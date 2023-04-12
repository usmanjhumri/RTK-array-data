import React from "react";
import Home from "../Home/Home";
import Marquee from "../Marquee/Marquee";
import NewArival from "../NewArival/NewArival";
import Payday from "../PayDay/Payday";
import Youngs from "../Youngs/Youngs";
import Download from "../DownloadApp/Download";
import Contact from "../Contact/Contact";
import { Outlet } from "react-router-dom";

const MianHome = () => {
  return (
    <div>
      <Home />
      <Marquee />
      <NewArival />
      <Payday />
      <Youngs />
      <Download />
      <Contact />
      <Outlet />
    </div>
  );
};

export default MianHome;
