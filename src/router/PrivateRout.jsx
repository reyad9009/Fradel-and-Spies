import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../pages/loading/Loading";
import { Navigate } from "react-router-dom";


const PrivateRout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRout;
