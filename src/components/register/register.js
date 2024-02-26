import React from "react";
import { useState } from "react";
import {  useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    number: "",
    address: "",
  });
  const [error, setError] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
    }
    if (
      formData.userName &&
      formData.email &&
      formData.password &&
      formData.number &&
      formData.address 
     
    ) {
      toast.success("Register  Successfully")
        navigate('/')
    }
  };
  const validate = () => {
    const { userName, email, password, number, address } = formData;
    const newErrors = {};
    if (userName === "") {
      newErrors.userName = "userName is required";
    }
    if (email === "") {
      newErrors.email = "email is required";
    }
    if (password === "") {
      newErrors.password = "password is required";
    }
    if (number === "") {
      newErrors.number = "number is required";
    }
    if (address === "") {
      newErrors.address = " address is required";
    }
    setError(newErrors);
  };
  return (
    <>
      <div className="container-fluid text-center mt-3">
        <div>
          <h2>register</h2>
        </div>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="mt-2">
            <label>userName:</label>
            <input
              type="text"
              placeholder="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
            />
            <br />
            {error.userName && (
              <span style={{ color: "red" }}>{error.userName}</span>
            )}
          </div>
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
          <div className="mt-2">
            <label>Number:</label>
            <input
              type="number"
              placeholder="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
            <br />
            {error.number && (
              <span style={{ color: "red" }}>{error.number}</span>
            )}
          </div>
          <div className="mt-2">
            <label>Address:</label>
            <input
              type="address"
              placeholder="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <br />
            {error.address && (
              <span style={{ color: "red" }}>{error.address}</span>
            )}
          </div>
          <div>
            <button type="submit" className="btn btn-primary mt-4">
              Submit <ToastContainer/></button>
              
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
