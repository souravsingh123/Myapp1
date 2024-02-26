import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  // console.log(token);
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;