import React from "react";
import styles from "./AboutDoctorBanner.module.css";
import Wave from 'react-wavify';
import { Link } from "react-router-dom";

function AboutDoctorBanner() {
  return (
    <div>
      <section className={styles.banner}>
      
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
          <Link to="/contact"><button className={styles.navButton}>Book an Appointment</button></Link>  
          </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default AboutDoctorBanner;

