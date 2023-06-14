import React from "react";
import styles from "./About3.module.css";

function About3() {
  return (
    <div className={styles.about3}>
      <div className={styles.innerContainer}>
        <div className={styles.leftDiv}>
          <h1>We partner with companies to bring clarity to their brand</h1>
          <div className={styles.bar}>
            <span>StartUps</span>
            <span >75%</span>
          <progress  value="75" max="100"></progress>
         </div>
          <br/>
          <div className={styles.bar}>
          <span>Investors</span>
            <span >70%</span>
          <progress  value="70" max="100"></progress>
          </div>
          <br/>
          <div className={styles.bar}>
          <span>PartnerShips</span>
          <span >80%</span>
          <progress  value="80" max="100"></progress>
          </div>

        </div>
        <div className={styles.rightdiv}>
        <img className={styles.frontImage} src="http://www.swaytheme.com/wp-content/uploads/sites/3/2020/08/Startup5.jpg" />
            <img className={styles.backImage} src="http://www.swaytheme.com/wp-content/uploads/sites/3/2020/08/Startup4.jpg"/>
            
        </div>
      </div>
    </div>
  );
}
export default About3;
