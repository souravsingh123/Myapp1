import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from "../register/register";
import Login from "../login/login";
import DashBoard from "../dashboard/dashBoard";
import ProductDetails from "../dashboard/productDetails";
import ProtectedRoute from "../protectedRoute/protectedRoute";
import Profile from "../pages/profile";
import Setting from "../pages/setting";
import Navbar from "./navbar";

const Router = () => {
  return (
    <>
      <BrowserRouter>
   
        <Fragment>
          <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path="/register" element={<Register />} /> */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashBoard" element={<DashBoard />} />
            </Route>
            <Route path="/productDetails/:id" element={<ProductDetails />} />
          
            <Route path="/profile" element={<Profile />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/navbar" element={<Navbar/>}/>
          </Routes>
        </Fragment>
      </BrowserRouter>
    </>
  );
};

export default Router;
