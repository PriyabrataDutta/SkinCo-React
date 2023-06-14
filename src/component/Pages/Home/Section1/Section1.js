import Button from "../../../UI/Button";
import styles from "./Section1.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Section1 = () => {
  return (
    <>
      <div className={styles.section_2_main}>
        <div className={styles.header}>
          <h4>
            {/* we are committed to providing our salow clients stunning beauty
            services */}
          </h4>

        </div>
        <div className={styles.section_2}>
          <div className={styles.section_2_img}>
            <img
              className={styles.img_1}
              src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/test_purpose/New_Folder/small-2-size-2__1___D8XboLtv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668602474893"
              alt=""
            />
            <img
              className={styles.img_2}
              src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/test_purpose/New_Folder/small-1-size-2__1__2WAc_EmdI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668602483794"
              alt=""
            />
          </div>
          <div className={styles.section_2_content}>
            <div data-aos="fade-right" className={styles.content_data}>
              <h3>
              Welcome to Healthy Skin Co Clinic
              </h3>
              <p>
              Every skin deserves utmost attention and care because the skin is a vital part of the body. Healthy skin is a reflection of overall well-being. We believe everyone deserves healthy and radiant skin. Maintaining healthy skin improves mental health and boosts your confidence. Healthy Skin Co clinic is one of the leading hair, skin, dermatology and aesthetic centre in Malleshwaram.
              </p>
              <ul>
                <li>Headed by Dr.Soumya Soragavi, certified dermatologist and cosmetologist </li>
                <li>Experienced doctor with advanced treatments</li>
                <li>US - FDA approved equipments</li>
                <li>Highly standard protocols</li>
                <li>100% safe procedures</li>
              </ul>
              {/* <div className={styles.buttondiv}>
                <button className={styles.navButton}>Book Now</button>
                &nbsp;&nbsp;
                
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section1;
