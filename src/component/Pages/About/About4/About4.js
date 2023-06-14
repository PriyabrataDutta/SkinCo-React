import React from 'react'
import styles from './About4.module.css'
import Slider from "react-slick";
import { FiMonitor } from "react-icons/fi";



function About4() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

      <div className={styles.mainContainer}>
         
        <div className={styles.headingContent}>
      <h1>Our Team Members</h1>
      <span>If you want the best care possible for your four-legged friend,
        our certified professionals are here to help</span>
        </div>    
      <Slider {...settings}>
      <div className={styles.circle}><img width='200px'src='http://www.swaytheme.com/wp-content/uploads/sites/3/2020/08/team3.jpg'/><div className={styles.hide}> <h1>Shreya</h1></div></div>
      <div className={styles.circle}><img width='200px'src='https://www.swaytheme.com/wp-content/uploads/sites/3/2020/08/team1.jpg'/><div className={styles.hide}> <h1>Agastya</h1></div></div>
      <div className={styles.circle}><img width='200px'src='https://www.swaytheme.com/wp-content/uploads/sites/3/2020/08/team2.jpg'/><div className={styles.hide}> <h1>Ronika</h1></div></div>
      <div className={styles.circle}><img width='200px'src='http://www.swaytheme.com/wp-content/uploads/sites/3/2020/08/team4.jpg'/><div className={styles.hide}> <h1>Deepa</h1></div></div> 
      <div className={styles.circle}><img width='200px'src='http://www.swaytheme.com/wp-content/uploads/sites/3/2020/08/team4.jpg'/><div className={styles.hide}> <h1>Shalini</h1></div></div>  
      </Slider>    
    </div>
    
  )
}

export default About4
