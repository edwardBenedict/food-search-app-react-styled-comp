import React from "react";
import Navbar from "../components/navbar/Navbar";

const PrivateRouter = ({ isAuth, children, ...rest }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default PrivateRouter;
