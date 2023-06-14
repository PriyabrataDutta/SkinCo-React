import React from 'react'
import styles from './Section3.module.css'
import Button from '../../../UI/Button'

function Section3() {
  return (
    <div className={styles.section_4_main}>
    <div className={styles.content_section}>
      <div className={styles.heading}>
      <h1>Best Dermatology Clinic</h1>
      </div>
      <p>
      Dr. Soumya Soragavi, a highly qualified and certified dermatologist, offers a wide range of skin, hair, and nail care treatments at Healthy Skin Co Clinic. We value your health and well-being!
      </p>
      {/* <Button className = {styles.hello} >Discover Now</Button> */}
    </div>
    {/* <div className={styles.img_section}>
      <img
        src="http://www.swaytheme.com/wp-content/uploads/sites/3/2020/10/hair-salon3.jpg"
        alt="" />
    </div> */}
  </div>
  )
}

export default Section3
