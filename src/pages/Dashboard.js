import React from "react";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";
import FavSidebar from "../components/FavSidebar";
import Navigation from "../components/Navigation";
import Profile from "../assets/Profile.png";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import TopSidebar from "../components/TopSidebar";
import RecentSidebar from "../components/RecentSidebar";

const Dashboard = () => {
  const { color } = useSelector((state) => state.bgcolor);
  const location = useLocation();

  return (
    <div
      style={{ background: `linear-gradient(to right, ${color}, #000000)` }}
      className="h-screen w-full sm:h-[895px] sm:w-[1512px]"
    >
      <div className="block sm:hidden absolute text-white ">
        <Player />
      </div>

      {/* Navigation */}
      <div className="hidden sm:block">
        <div
          className="absolute"
          style={{
            width: "133.41px",
            height: "40px",
            top: "32px",
            left: "32px",
          }}
        >
          <img src={logo} alt="logo" />
        </div>
        <div className="w-[150px] h-[200px] text-white absolute top-[100px] left-[32px] flex gap-[24px]">
          <Navigation />
        </div>

        <div
          className="absolute rounded-full"
          style={{
            width: "48px",
            height: "48px",
            top: "815px",
            left: "32px",
          }}
        >
          <img
            src={Profile}
            alt="profile"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>

      {/* Sidebar */}
      <div className="hidden sm:block absolute text-white p-4 w-[440px] h-full top-[25px] left-[278px]">
        {(() => {
          if (location.pathname === "/favourites") {
            return <FavSidebar />;
          } else if (location.pathname === "/top-tracks") {
            return <TopSidebar />;
          } else if (location.pathname === "/recently-played") {
            return <RecentSidebar />;
          } else {
            return <Sidebar />;
          }
        })()}
      </div>

      {/* Player */}
      <div className="hidden sm:block absolute text-white p-4 w-[510px] h-[708.24px] top-[78px] left-[860px] flex flex-col gap-[40px]">
        <Player />
      </div>
    </div>
  );
};

export default Dashboard;
