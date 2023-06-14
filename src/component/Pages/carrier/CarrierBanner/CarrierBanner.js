import React from "react";
import styles from "./CarrierBanner.module.css";
import Wave from 'react-wavify';
import { Link } from "react-router-dom";

function CarrierBanner() {
  return (
    <div>
      <section className={styles.banner}>
      
        <div className={styles.banner_image}>
        
          <img
            width="100%"
            src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/test_purpose/carrierBanner_c0aRt8Zo6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668158960452"
          />
           <div data-aos="fade-down" className={styles.content}>
          <div >
            <h2>Contact Us</h2>
            <span>
            Our design and business core competencies make company goals work on future-oriented systems and day our consultants are proud to help.
            </span>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default CarrierBanner;
