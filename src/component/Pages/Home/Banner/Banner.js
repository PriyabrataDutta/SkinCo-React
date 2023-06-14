import styles from "./Banner.module.css";
import Wave from "react-wavify";
import Button from "../../../UI/Button";
import Slider from "react-slick";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormModal from "../../../UI/Modal/FormModal";

const Banner = () => {
  const [formModal , setFormModal] = useState(false)
  var settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  }

  return (
    <div>
       {formModal &&<FormModal onClick = {()=>{setFormModal(false)}}/>}
      <section className={styles.banner}>
      <Slider style={{color:"black"}} {...settings}>
        <div className={styles.banner_image}>
          <img
            width="100%"
            src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/test_purpose/New_Folder/Dermatology-Hospital__1__ICFX1qz0Ll.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675165910942"
          />
           <div data-aos="fade-down" className={styles.content}>
          <div >
            <h2>The Best Dermatology Clinic In Malleshwaram</h2>
          
          </div>
          <div style={{ marginTop: "25px" }}>
          <a href="https://click4appointment.com/book-appointment-guest/408954/3081"  target="_blank"> 
          <button  className={styles.navButton}>Book an Appointment</button></a>
          </div>
        </div>
        </div>
        <div className={styles.banner_image}>
        <img
          width="100%"
          src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/test_purpose/New_Folder/Skin-_-Hair-Concerns__1__d1TJ_KFwo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675165910630"
        />
         <div data-aos="fade-down" className={styles.content}>
          <div >
            <h2>Better Skin Better You</h2>
            <span>
            Single Solution for Every Skin & Hair Concerns 
            </span>
          </div>
          <div style={{ marginTop: "25px" }}>
          <Link to="/about"><button className={styles.navButton}>Book an Appointment</button></Link>   
          </div>
        </div>
      </div>
      <div className={styles.banner_image}>
        <img
          width="100%"
          src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/test_purpose/New_Folder/Complete-Skin-_-Hai__1__wtNSBskuO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675165910911"
        />
         <div data-aos="fade-down" className={styles.content}>
          <div >
            <h2>A Complete Skin & Hair Treatments</h2>
            <span>
            For Best Results Consult Now
            </span>
          </div>
          <div style={{ marginTop: "25px" }}>
          <button  onClick={()=>{setFormModal(true)}} className={styles.navButton}>Book an Appointment</button>   
          </div>
        </div>
      </div>
        </Slider>
      </section>
    </div>
  );
};

export default Banner;
