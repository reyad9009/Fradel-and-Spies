import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../pages/footer/Footer";
//import { AuthContext } from "../provider/AuthProvider";
//import Loading from "../pages/loading/Loading";

const MainLayout = () => {
  // const { loading } = useContext(AuthContext);
  // const [showLoading, setShowLoading] = useState(true);
  // useEffect(() => {
  //   // Simulate loading for 5 seconds
  //   const timer = setTimeout(() => {
  //     setShowLoading(false);
  //   }, 1000);

  //   // Clear the timeout when the component unmounts
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <div>
      <Navbar></Navbar>
      {/*{showLoading || loading ? (
        <Loading /> // Show the loading component when data is loading
      ) : (
        <> */}
      <div className="max-w-7xl mx-auto"> 
        <Outlet></Outlet>
      </div>

      {/* </>
      )} */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
