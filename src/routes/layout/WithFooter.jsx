import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const WithFooter = () => {
  return (
    <>
      <Outlet />
      <Footer/>
    </>
  );
};

export default WithFooter;
