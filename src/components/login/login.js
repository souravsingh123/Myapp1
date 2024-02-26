import React from "react";
import { useState, useEffect } from "react";
import "./login.css";
// import { NavLink } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateProfile from "../updateProfile/updateProfile";
//import UserProfileApi from "../../apiHelper/userProfileApi";

const Login = () => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      window.location.href = window.location.origin + "/dashboard";
    }
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const IsLogin = () => {
    axios
      .post(`http://192.168.0.130/invoice/api/Account/login`, {
        username: formData.email,
        password: formData.password,
      })
      .then((res) => {
        console.log("click")
        if (res.data.statusCode === 200) {
          console.log("click")
          toast.success(res.data?.message);
          // <UserProfileApi/>
          localStorage.setItem("firstName", res.data.data.firstName);
          localStorage.setItem("lastName", res.data.data.lastName);
          localStorage.setItem("token", res.data.data.token);
          // localStorage.setItem("userId", res.data.data.userId);
          // localStorage.setItem("city", res.data.data.city);
          // localStorage.setItem("state", res.data.data.state);
          // localStorage.setItem("image",res.data.data.image)
          window.location.href = window.location.origin + "/dashboard";
        } else {
          toast.error(res.data?.message);
        }
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", formData.email);
    localStorage.setItem("password", formData.password);

    if (validate()) {
    }
    if (formData.email && formData.password && validate()) {
      IsLogin();
      <UpdateProfile />;
    }
  };
  const validate = () => {
    const { email, password } = formData;
    const newErrors = {};
    if (email === "") {
      newErrors.email = "email is required";
      setError(newErrors);
      return false;
    }
    if (password === "") {
      newErrors.password = "password is required";
      setError(newErrors);
      return false;
    }
    return true;
  };
  return (
    <>
      <div className="container-fluid text-center mt-3">
        <div>
          <h2>login</h2>
        </div>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="mt-2" style={{ marginLeft: "27px" }}>
            <label>Email: </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            {error.email && <span style={{ color: "red" }}>{error.email}</span>}
          </div>
          <div className="mt-2">
            <label>Password:</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <br />
            {error.password && (
              <span style={{ color: "red" }}>{error.password}</span>
            )}
          </div>
          <div className="mt-4">
            <button type="submit" className="btn btn-primary ">
              Submit
              <ToastContainer />
            </button>

            {/* <NavLink
              to="/register"
              style={{
                textDecoration: "none",
                position: "absolute",
                left: "570px",
              }}
            >
              register
            </NavLink> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
