import React from "react";
import styles from "./BlogBanner.module.css";
import Wave from 'react-wavify';
import { Link } from "react-router-dom";

function About1() {
  return (
    <div>
      <section className={styles.banner}>
      
        <div className={styles.banner_image}>
        
          <img
            width="100%"
            src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/test_purpose/xab_Uu5Ow2X8U.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668157545039"
          />
           <div data-aos="fade-down" className={styles.content}>
          <div >
            <h2>Blogs</h2>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default About1;
