import React from "react";
import Menubar from "../Menubar/Menubar";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container ">
      <div className="">
        <div className="row header">
          <Menubar></Menubar>
          <div className="col-md-6">
            <h1 className="title">
              We Will Teach  <br /> You to Dance
            </h1>
            <p className="text-white text-center mt-3">
              Dance classes for everyone.
              The world’s best dance learning tools – at your fingertips. Start free for 7 days.
            </p>
            <button className="mt-3 about-btn">About Us</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;