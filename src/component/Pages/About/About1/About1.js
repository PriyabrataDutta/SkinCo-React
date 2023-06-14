
import styles from "./About1.module.css";
import Wave from 'react-wavify';

// import FormModal from "../../../UI/Modal/FormModal";
import React, { useState } from "react";
import FormModal from "../../../UI/Modal/FormModal";

function About1() {
  const [formModal , setFormModal] = useState(false)
  return (
    <div>
    <section className={styles.banner}>
    {formModal &&<FormModal onClick = {()=>{setFormModal(false)}}/>}
    
      <div className={styles.banner_image}>
      
        <img
          width="100%"
          src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/test_purpose/trial-1_11zon_VFKJXhrk4k.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668600398342"
        />
         <div data-aos="fade-down" className={styles.content}>
        <div >
          <h2>Dr Soumya Soragavi</h2>
          <span>
          M.B.B.S, MD - Dermatology, Venereology & Leprosy
          </span>
          <div style={{ marginTop: "25px" }}>
        <button onClick={()=>{setFormModal(true)}}  className={styles.navButton}>Book an Appointment</button>  
        </div>
        </div>
      </div>
      </div>
    </section>
  </div>
  );
}

export default About1;
