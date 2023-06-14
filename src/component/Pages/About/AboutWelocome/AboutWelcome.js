import React from "react";
import styles from "./AboutWelcome.module.css";

function AboutWelcome() {
  return (
    <>
      <div style={{ color: "white", backgroundColor: "black" }}></div>
      <div className={styles.mainContaier}>
        <div className={styles.contentContainer}>
          <h1>
            Welcome to <span>Healthy Skin Co</span>
          </h1>
          <p>
            Healthy Skin Co Clinic is an Aesthetic, Dermatology & Trichology
            centre in Malleshwaram, Bengaluru, headed by Chief Dermatologist Dr. Soumya
            Soragavi is an experienced Dermatologist, Trichologist and
            Cosmetologist in Bangalore. She completed her MBBS from Belgaum
            Institute of Medical Sciences, Belgaum, Bangalore, in 2012 and her
            MD (Doctor of Medicine in Dermatology) from Sri Devaraj Urs Medical
            College, Kolar, Bangalore, in 2017.
          </p>
          <p>
           She obtained FRGUHS Fellowship in Aesthetic Dermatology And Cosmetology from
            CUTIS ACADEMY OF CUTANEOUS SCIENCES affiliated to RGUHS in 2019. The
            clinic has U.S. FDA approved Lasers for Hair Removal, Pigmentation,
            Acne Scars & Facial Rejuvenation.
          </p>
        </div>
        <div className={styles.imageContaier}>
          <div className={styles.contentbx}>
            <div className={styles.formbx}>
              <h1>Feel free to contact us anytime. We will get back to you soon!</h1>
              <p>Book An Appointment</p>
              <form className={styles.formContainer}>
                <div>
                  <br />
                  <input type="name" placeholder="Enter your name" />
                </div>
                <div>
                  <br />
                  <input type="name" placeholder="Enter your email" />
                </div>
                <div>
                  <br />
                  <input type="tel" placeholder="Enter your phone no" />
                </div>
                <div>
                  <br />
                  <textarea type="name" placeholder="Your message" />
                </div>
                <button type="submit" className={styles.navButton}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutWelcome;
