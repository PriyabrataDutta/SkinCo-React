import React from "react";
import styles from "./ServiceBaner.module.css";
import Wave from 'react-wavify';
import { Link } from "react-router-dom";

function ServiceBanner() {
  return (
    <div>
      <section className={styles.banner}>
        <div className={styles.banner_image}>
          <img
            width="100%"
            src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/test_purpose/New_Folder/Skin-_-Hair-Concerns__1__d1TJ_KFwo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675165910630"
          />
           <div data-aos="fade-down" className={styles.content}>
          <div>
            <h2>Our Services</h2>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceBanner;
