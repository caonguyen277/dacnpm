import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,useLocation, useMatch } from "react-router-dom";
const Relative = () => {
  let params = useParams();
  // let location = useLocation();
  const [user, setUser] = useState({

  });
  useEffect(() => {
    loadRealative();
  },[]);
  const loadRealative = async () => {
    const result = await axios.get("http://localhost:3003/users");
    const obj = result.data.find((obj) => obj.id === Number(params.id));
    setUser(obj);
  }
  return (
    <div>
      <h2>{user.name}</h2>
    </div>
  )
};

export default Relative;
