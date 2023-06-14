
import React, { useState } from "react";
import styles from "./ContactBanner.module.css";
import Wave from 'react-wavify';
import { Link } from "react-router-dom";
import FormModal from "../../../UI/Modal/FormModal";

function ServiceBanner() {
  const [formModal , setFormModal] = useState(false)
  return (
    <div>
       {formModal &&<FormModal onClick = {()=>{setFormModal(false)}}/>}
      <section className={styles.banner}>
      
        <div className={styles.banner_image}>
        
          <img
            width="100%"
            src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/test_purpose/carrierBanner_c0aRt8Zo6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668158960452"
          />
           <div data-aos="fade-down" className={styles.content}>
          <div >
            <h2>Consult Our Expert Now</h2>
          </div>
          <div style={{ marginTop: "25px" }}>
          <button  onClick={()=>{setFormModal(true)}} className={styles.navButton}>Book an Appointment</button>   
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceBanner;
