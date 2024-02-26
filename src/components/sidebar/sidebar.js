import React from "react";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import LogoutIcon from "@mui/icons-material/Logout";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ReportIcon from "@mui/icons-material/Report";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
    const navigate= useNavigate();

    const token = localStorage.getItem("token");
    const Logout = () => {
      console.log("logout");
      localStorage.clear(token, "token");
       navigate("/");
    };
    const Home=()=>{
        navigate('/')
    }
    const Profile=()=>{
        navigate('/profile')
    }
  return (
    <div className="sidebar">
      <h2 className="h2 text-center">Sidebar</h2>
      <div className="sidebar-items mt-5 mx-3">
        <div className="home mt-3 mx-3" onClick={Home}>
          <HomeIcon />
          <b>Home</b>
        </div>
        <div className="list mt-3 mx-3">
          <ListIcon />
          <b>List</b>
        </div>
        <div className="profile mt-3 mx-3" onClick={Profile}>
          <AccountBoxIcon />
          <b>Profile</b>
        </div>
        <div className="product mt-3 mx-3">
          <ProductionQuantityLimitsIcon />
          <b>Product</b>
        </div>
        <div className="report mt-3 mx-3">
          <ReportIcon />
          <b>Report</b>
        </div>
        <div className="logout logout mt-3 mx-3" onClick={Logout}>
          <LogoutIcon />
          <b>Logout</b>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
