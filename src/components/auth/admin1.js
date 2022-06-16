import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../user/apiCore";

const Admin1 = ({ children }) => {
    return isAuthenticated()?.user.role === 1
      ? children
      : <Navigate to='/signin' replace />;
  };

export default Admin1;
