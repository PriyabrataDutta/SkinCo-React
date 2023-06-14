import React from "react";
import styles from "./VisionMission.module.css";

function VisionMission() {
  return (
    <div className={styles.visionContainer}>
      <div className={styles.visionDesription}>
        <div className={styles.visionTitle}>Vision</div>
        <p className={styles.visionDesc}>
        Our chief dermatologist and board-certified aesthetician Dr. Soumya Soragavi believes that having healthy skin and hair inspires confidence and boosts one’s self-esteem. In a world where skincare advices are available so freely on social media, radio, newspapers, etc., it is easy to get carried away. That’s where dermatologist-recommended skin care products and treatments will make a difference. We at Healthy Skin Co believe that every product and treatment needs to be tailor-made for every individual and which ultimately helps in achieving overall healthy, flawless-looking skin.
        </p>
      </div>
      <div className={styles.visionDesription}>
        <div className={styles.visionTitle}>Mission </div>
        <p className={styles.visionDesc}>
        To deliver exceptional quality service, advice, care, and support for everyone. We strive to remain loyal to our patients providing righteous treatments that are safe, effective, and economical. 
        </p>
      </div>
    </div>
  );
}

export default VisionMission;
