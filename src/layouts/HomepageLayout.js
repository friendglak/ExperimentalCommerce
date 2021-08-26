import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomepageLayout = (props) => {
  return (
    <>
      <Navbar {...props} />
      <>{props.children}</>
      <Footer />
    </>
  );
};

export default HomepageLayout;
