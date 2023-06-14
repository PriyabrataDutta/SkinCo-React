import React from "react";
import styles from "./Footer.module.css";
import navList from '../Pages/Services/ServiceJsonData/Services.json'
import { Link } from "react-router-dom";
import {
  AiFillPhone,
  AiOutlineMail,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  const scrolltoTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.footerMain}>
      <div className={styles.footerContainer}>
        <div className={styles.logocontent}>
        <img width="90%" src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/test_purpose/New_Folder/website-logo_QBUomsGTSY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671166874309"/>
          <p>
          Dr. Soumya Soragavi, Chief Dermatologist, is a most-trusted clinical and cosmetic dermatologist with 8 years of experience and expertise from Malleshwaram, Bangalore.
          </p>
        </div>
        <div className={styles.services}>
          <h2>Services</h2>
          <ul>
          {navList.map((list, index) => (
                        
                        <li key={index} onClick = {scrolltoTop}>
                         
                          <Link style={{color:"black"}} to={`/servicedata/${list.link}/${index + 1}`}>
                            {list.navtitle}
                          </Link>{" "}
                        </li>
                      ))}
            {/* <li>Electrocautery, Radiofrequency ablation for warts.</li>
          <li>Chemical peels - for acne, pigmentation & glowing skin.</li>
          <li>Anti-Aging Solutions.</li>
          <li>Medi- facials.</li>
          <li>
            PRP & Growth Factor Injections for female and male pattern baldness
            treatment.
          </li>
          <li>Derma roller.</li>
          <li>BOTOX.</li>
          <li>Derma fillers.</li> */}
          </ul>

        </div>
        <div className={styles.services}>
          <h2>Pages</h2>
          <ul>
            <li onClick = {scrolltoTop}> <Link to="/">Home</Link></li>
            <li onClick = {scrolltoTop}> <Link to="/about">About</Link></li>
            {/* <li>Services</li> */}
            {/* <li><Link to="/blogs">Blog</Link></li> */}
            <li onClick = {scrolltoTop}><Link to="/contact">Contact</Link></li>
            {/* <li>Electrocautery, Radiofrequency ablation for warts.</li>
          <li>Chemical peels - for acne, pigmentation & glowing skin.</li>
          <li>Anti-Aging Solutions.</li>
          <li>Medi- facials.</li>
          <li>
            PRP & Growth Factor Injections for female and male pattern baldness
            treatment.
          </li>
          <li>Derma roller.</li>
          <li>BOTOX.</li>
          <li>Derma fillers.</li> */}
          </ul>
          
        </div>
        <div className={styles.contactInfo}>
          <h2>Contact Info</h2>
          <p>
            <b>Address:</b> 52/1, 17TH CROSS, 10th Main Rd, Malleshwaram,
            Bengaluru, Karnataka 560055
          </p>{" "}
          <p>
            <b>Phone number:</b> +91 95911 54574
          </p>
          <div className={styles.socialMedai}>
                <div
                  style={{
                    // backgroundColor: "white",
                    width: "40px",
                    height: "40px",
                    padding:"0px",
                    borderRadius: "40px",
                    alignItems:"center",
                    textAlign:"center",
                    // backgroundImage:
                    //   "linear-gradient(to right, #3a6ecf, #307bd9, #2588e2, #1b94eb, #15a1f2)",
                  }}
                >
                  <a
                    href="https://www.facebook.com/profile.php?id=100070148478872&mibextid=ZbWKwL"
                    target="blank"
                  >
                    <FaFacebook
                      style={{ color: "rgb(19, 74, 27)" , marginTop:"5px"}}
                      size={30}
                    />
                  </a>
                </div>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "40px",
                    marginLeft: "5px",
                    padding:"0px",
                    // background: "rgb(2,0,36)",
                    // background:
                    //   "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(245,169,2,1) 0%, rgba(245,2,182,0.7791491596638656) 59%)",
                  }}
                >
                  <a href="https://instagram.com/drsoumyadermatologist?igshid=Yzg5MTU1MDY=">
                  <AiFillInstagram
                    style={{ color: "rgb(19, 74, 27)" ,marginTop:"5px" , marginLeft:"5px"}}
                    size={30}
                  />
                  </a>
                </div>
                <div
                  style={{
                    // backgroundColor: "white",
                    width: "40px",
                    height: "40px",
                    padding:"0px",
                    borderRadius: "30px",
                    marginLeft: "5px",
                    // backgroundImage:
                    //   "linear-gradient(to right, #50abf1, #67bdf0, #85cdee, #a6dbee, #c9e9f0)",
                  }}
                >
                  {/* <AiFillTwitterCircle
                    style={{ color: "rgb(19, 74, 27)",marginTop:"5px" , marginLeft:"5px"}}
                    size={30}
                  /> */}
                </div>
              </div>
        </div>
      </div>
    </div>

    //     <div className={styles.footer_mains_container}>
    //     <div className={styles.footer_main_container}>
    //   <div className={styles.footer_logo_text_container}>
    //      <div className={styles.footer_logo_text}>
    //        <h1>Skin.co</h1>
    //       <p>
    //    Our feet are on the ground, but our ambitions are above the clouds. Here is how we move from the getting to know you phase to creating something remarkable.
    //       </p>
    //       <p>© 2022 Sway by KeyDesign. All Rights Reserved.</p>
    //      </div>
    //     </div>
    //     <div className={styles.footer_nav_links}>
    //       <div className={styles.footer_about_links}>
    //         <h1>Services</h1>
    //         <ul>
    //           <li>Electrocautery, Radiofrequency ablation for warts</li>
    //           <li>Chemical peels - for acne, pigmentation & glowing skin</li>
    //           <li>Anti-Aging Solutions</li>
    //           <li>Medi- facials</li>
    //           <li>PRP & Growth Factor Injections for female and male pattern baldness treatment</li>
    //           <li>Derma roller</li>
    //           <li>BOTOX</li>
    //           <li>Derma fillers</li>
    //         </ul>
    //       </div>
    //       <div className={styles.footer_about_links}>
    //         <h1>Contact Info</h1>
    //         <p><b>Address:</b> 52/1, 17TH CROSS, 10th Main Rd, Malleswaram, Bengaluru, Karnataka 560055</p>
    //         <p><b>Phone number:</b> +91 95911 54574</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Footer;
