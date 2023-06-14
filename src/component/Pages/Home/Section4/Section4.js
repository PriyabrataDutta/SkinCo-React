import styles from './Section4.module.css'
import React from 'react'
import Button from '../../../UI/Button'

function Section4() {
  return (
    <section className={styles.section4}>
      <div data-aos="fade-right" className ={styles.imgbx}>
        <img
         width="60%"
         className={styles.img1}
          src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/test_purpose/New_Folder/small-1-size-1__1__iPC2DrW6B.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668602950800"
          alt=""
        />
        <img
          className={styles.img2}
          src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/test_purpose/New_Folder/Untitled-2__1__zCmnGRNCo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675415199464"
          alt=""
        /> 
      </div>
      <div className ={styles.contentbx}>
        <div className= {styles.formbx} >
          <h1>Book Your Consultation Today!</h1>
          <p>
          
          {/* Book An Appointment */}
          </p>
          <form className={styles.formContainer}>
            <div>
              <br/>
              <input type="name" placeholder="Enter your name" />
            </div>
            <div>
              <br/>
              <input type="name" placeholder="Enter your email" />
            </div>
            <div>
              <br/>
              <input type="tel" placeholder="Enter your phone no" />
            </div>
            <div>
              <br/>
              <textarea type="name" placeholder="Your message" />
            </div>
            <button type='submit'className={styles.navButton}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Section4
