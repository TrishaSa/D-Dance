import React, { useEffect, useState } from "react";
import './Services.css'
const Services = () => {
  const [services, setServices] = useState([])
   useEffect(() => {
    fetch('./services.JSON')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return(
   <div className="service-container">
   <h2>Our Classes</h2>
      <div className="services">
        <div className="row">
          {services?.map((sv) => (
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
        )
}


export default Services;