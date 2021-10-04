import React, { useEffect, useState } from "react";
import Menubar from "../Menubar/Menubar";
import Footer from "../Footer/Footer";
import './AllService.css'

const AllService = () => {
  const [allservices, setAllServices] = useState([])
   useEffect(() => {
    fetch('./AllService.JSON')
      .then(res => res.json())
      .then(data => setAllServices(data));
  }, []);

  return(
    <div>
   <div className="service-container">
   <Menubar></Menubar>
   <h2>Our Classes</h2>
      <div className="services">
        <div className="row">
          {allservices?.map((sv) => (
            <div className="col-md-4">
              <div className="cart">
                <div className="cart-details">
                  <img className="w-50 img" src={sv.img} alt="" />
                </div>
                <div className="text-area">
                  <h4>Title:{sv.Title}</h4>
                  <h5>Price:{sv.Price}</h5>
                  <p>{sv.Description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
         </div>
      </div>
      <Footer></Footer>
      </div>
        )
}

export default AllService