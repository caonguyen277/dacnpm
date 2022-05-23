import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="text-center" style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <h1 style={{paddingRight: 20}}>
        Not Found!
      </h1> 
      
      <NavLink exact to="/">
        <h3>Back to home</h3>
        </NavLink>
    </div>
  );
};

export default PageNotFound;
