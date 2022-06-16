import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../user/apiCore";

const Admin2 = ({ children }) => {
    return isAuthenticated()?.user.role === 2
      ? children
      : <Navigate to='/signin' replace />;
  };

export default Admin2;
