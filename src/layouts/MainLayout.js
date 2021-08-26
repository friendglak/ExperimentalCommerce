import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = (props) => {
  return (
    <>
      <Navbar {...props} />
      <>{props.children}</>
      <Footer />
    </>
  );
};

export default MainLayout;
