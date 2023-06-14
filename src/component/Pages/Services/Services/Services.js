import React from "react";
import styles from "./Services.module.css";
import services from '../ServiceJsonData/Services.json'
import { Link } from "react-router-dom";

function Services() {
  return (
    
    <div className={styles.section_3_main}>
    <div className={styles.title_content}>
      {/* <h4>
          WE ARE COMMITTED TO PROVIDING OUR SALON CLIENTS STUNNING
          BEAUTY
          SERVICES
        </h4> */}
      <h1>Our Trending Treatment</h1>
    </div>
    <div className={styles.sub_section_3}>
      {services.map((service)=>(
        <div>
        <div className={styles.flip_card}>
          <div className={styles.flip_card_inner}>
            <div className={styles.flip_card_front}>
              <h1>{service.title}</h1>
              <p>
                {service.description.substring(0,80)}...
              </p>
              <img
                src={service.front_logo}
                alt="Avatar"
                style={{ width: "30%", padding: "0%" }}
              />
              <div className={styles.buttondiv}>
              <Link to="/servicedata"><button>Know More</button></Link>  
              </div>
            </div>
            {/* <div
              style={{
                backgroundImage:
                  `url(${service.backflipImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize:"cover",
                width:"100%"
              }}
              className={styles.flip_card_back}
            >
              
            </div> */}
           
          </div>
        </div>
      </div>
      ))}
    </div>
  </div>
  );
}
export default Services;
