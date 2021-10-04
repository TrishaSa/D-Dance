import React from "react";
import Footer from "../Footer/Footer";
import Menubar from "../Menubar/Menubar";
import Header from "./../Header/Header";
import Services from "./../Services/Services";
import Teacher from "./../Teachers/Teacher";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Teacher></Teacher>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;