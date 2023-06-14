import React from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  return (
    <>
    {/* <span style={{color:"white"}}>Home | Contact Us</span> */}
    {/* <hr/> */}
    <div className={styles.contact}>
    <div data-aos="fade-up" className={styles.formDivMain}>
      <div className={styles.left}>
        <form className={styles.formDiv}>
          <h1>Get In Touch With US</h1>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" /> <br />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone No" />
          <br />
          <textarea style={{margin:"10px"}} rows="5" cols="27" placeholder="Drop a Message"></textarea>
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
      <div className={`${styles.address} ${styles.right}`}>
        <p>
        Feel free to contact us anytime. We will get back to you soon!
        </p>
        <div>
        <h4>Bengaluru Contact Info</h4>
        <div>
            <address>
                <span>
                    <p>52/1 17TH Cross, 10th Main Rd, Malleswaram, Bengaluru, Karnataka 560055</p>
                </span>
            </address>
        </div>
        </div>
        {/* <div>
        <h4>Nagarabhavi Clinic Contact Info</h4>
        <div>
            <address>
                <span>
                    <p>#89, 17th cross, MC layout, Near Balagangadharnath Swamy Metro Station, Vijayanagar, Bangalore - 560040</p>
                </span>
            </address>
        </div>
        </div> */}
      </div>
    </div>
    </div>
    </>
  );
}

export default ContactForm;
