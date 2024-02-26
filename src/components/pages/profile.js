import React, { useState, useEffect } from "react";
import image from "../image/teddy.avif";
import "./profile.css";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";
import Navbar from "../router/navbar";
import MessageIcon from "@mui/icons-material/Message";
import DoneIcon from '@mui/icons-material/Done';
const Profile = () => {
  const token = localStorage.getItem("token");
  // const navigate = useNavigate();
  const [data, setData] = useState({});
  console.log("ProfileData", data?.data?.city);

  useEffect(() => {
    axios
      .get(
        `http://192.168.0.130/invoice/api/Account/getuserbyid?userId=bf6da3c5-6403-4176-1225-08dba3d1d9b7`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("res", res);
        if (res.data.statusCode === 200) {
          // console.log(res.data)
          setData(res?.data);
          // console.log('ProfileData',res.data);
        }
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }, [token]);

  // const handleEdit = () => {
  //   navigate("/setting");
  //   // window.location.href = window.location.origin + '/setting'
  // };

  return (
    <>
      <div className="container">
        <Navbar />
        <Sidebar />

        <div className=" text-center mt-3">
          <h3>Profile</h3>
          <div className=" image1 text-center mt-3">
            {/* <img src={data?.data?.image} alt={data?.data?.firstName} /> */}
            <img
              src={image}
              alt=""
              style={{ width: "150px", height: "200px" }}
            />
          </div>
          <div className="fName text-center mt-3">
            Name: <b> {data?.data?.firstName}</b>
          </div>
          <div className="lName text-center mt-3">
            <b> {data?.data?.lastName}</b>
          </div>
          <p className="p1">Product Designer </p> <br />
          <span className="s1">
            Ranking-{" "}
            <b>
              8.6 <br />
              <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
            </b>
           
          </span>
       
          <div className="message">
          <MessageIcon/> <b>Send Messages</b>
          <button className="mx-3"><span ><DoneIcon/>Contacts</span></button>
          </div>
          <p className="info">Personal Information <hr/></p>

          <div className="email text-center mt-3">
            email:<b> {data?.data?.email}</b>
          </div>
         <div className="role text-center mt-3">
            role:<b> {data?.data?.role}</b>
          </div>
            <div className="gender text-center mt-3">
            gender:<b> {data?.data?.gender}</b>
          </div>
          <p className="address">Address <hr/></p>
          <div className="country text-center mt-3">
            country:<b> {data?.data?.country}</b>
          </div>
          <div className="state text-center mt-3">
            state:<b> {data?.data?.state}</b>
          </div>
          <div className="city text-center mt-3">
            city:<b> {data?.data?.city}</b>
          </div>

        <div className="work">Work <hr/>
        <b>Spotify New York</b>
        <br/>
        <p>170 Willian Street <br/> New York, NY-10038</p>
        </div>
        <div className="skill"> Skills <hr/>
        Branding <br/>
        UI/UX <br/>
        Web-Design <br/>
        Packaging <br/>
        Print and Editorial
        </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
