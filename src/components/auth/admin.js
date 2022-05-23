import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../user/apiCore";

const Admin = ({ children }) => {
    return isAuthenticated()
      ? children
      : <Navigate to='/signin' replace />;
  };

export default Admin;
