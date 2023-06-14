import React from "react";
import styles from "./About5.module.css";
import Slider from "react-slick";
import { FiMonitor } from "react-icons/fi";

function About5() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.mainContainer}>
      <Slider style={{ color: "black" }} {...settings}>
        <div className={styles.testimonial}>
          <div className={styles.circle}>
            {/* <img
          
            src=""
          /> */}

            <div className={styles.headingContent}>
              <h1>Manasa Muralidhar</h1>
              <p style={{ textAlign: "center" }}>⭐⭐⭐⭐⭐</p>

              <span>
                Amazing experience with Dr. Soumya Soragavi. I went to her with
                lots of confusion and now I just trust her blindly. She is
                simply superb & she understands everything that we try to convey
                to her and treats amazingly!
              </span>
            </div>
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.circle}>
            {/* <img
          
            src=""
          /> */}

            <div className={styles.headingContent}>
              <h1>Kiran melligeri</h1>
              <p style={{ textAlign: "center" }}>⭐⭐⭐⭐⭐</p>

              <span>
              Best dermatologist! I’ve never been to one. I had a problem with dark circles. After the treatment, I was amazed at the results! I’m satisfied completely with the treatment, and I recommend her to all my close ones!
              </span>
            </div>
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.circle}>
            {/* <img
          
            src=""
          /> */}

            <div className={styles.headingContent}>
              <h1>Prashanth P</h1>
              <p style={{ textAlign: "center" }}>⭐⭐⭐⭐⭐</p>

              <span>
              I've struggled with Acne my entire life. And came to know about Dr. Soumaya, and later I started consulting with Dr. Soumya. I felt like I finally started seeing the light at the end of the tunnel. Thank you so much, Dr. Soumya! I eagerly await my next visit to your clinic.
              </span>
            </div>
          </div>
        </div>
       
      </Slider>
    </div>
  );
}

export default About5;
