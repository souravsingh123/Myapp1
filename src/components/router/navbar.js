import React from "react";
import "./navbar.css";
import img from "../image/teddy.avif";
import "reactjs-popup/dist/index.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const Logout = () => {
    console.log("logout");
    localStorage.clear(token, "token");
    navigate("/");
  };
  return (
    <>
      <div className="navbar">
        <p className="username">
          <div class="dropdown mt-5">
            <button
              className="btn2  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {localStorage.getItem("firstName") + " "}
              {localStorage.getItem("firstName")}
              <img className="img" src={img} alt="" id="dropbtn" />
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <div
                  className="logout1  mx-3 text-center"
                  onClick={Logout}
                  style={{ cursor: "pointer", color: "black" }}
                >
                  <LogoutIcon />
                  <b>Logout</b>
                </div>
              </li>
            </ul>
          </div>
        </p>
      </div>
    </>
  );
};

export default Navbar;
