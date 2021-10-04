import React from "react";
import Footer from "../Footer/Footer";
import Menubar from "../Menubar/Menubar";

const Error = () => {
  return (
    <div className="error-bg">
      <Menubar></Menubar>
      <h1 className="text-danger mt-5">Cant found error 404 !!!</h1>
    </div>
  );
};

export default Error;