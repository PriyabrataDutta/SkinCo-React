import styles from './About2.module.css'
import { FaLightbulb , FaUserPlus } from 'react-icons/fa';
import { AiFillCrown } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import Button from '../../../UI/Button';


const About2 = () => {
  return (
    <section className={styles.mainsection}>
      <main className={styles.content}>
        <h1>Why Choose Us</h1>
      </main>
      <article className={styles.cards}>
        <div> 
            <FaLightbulb style={{color:"#6A6BD0"}} size={60}/>
            <h3>Accurate Diagnosis</h3>
            <p>Skin conditions seem simple, but they are difficult to distinguish. A thorough scintific knowledge place crucial role in helping in determining the correct diagnosis</p>
            <div className={styles.buttondiv}>
                {/* <button className={styles.navButton}>Book Now</button> */}
                {/* &nbsp;&nbsp; */}
              </div>
        </div>
        <div>
            <AiFillCrown style={{color:"#80DAC4"}} size={60}/>
            <h3>Quality & Cost-Effective Treatment</h3>
            <p>Treatment for skin conditions can be lengthy and occasionally expensive as well. By avoiding unnecessary medications, our point-to-point therapy lowers the total cost of therapy and makes it accessible to everyone.</p>
            <div className={styles.buttondiv}>
                {/* <button className={styles.navButton}>Book Now</button> */}
                {/* &nbsp;&nbsp; */}
              </div>
        </div>
        <div>
            <FaUserPlus style={{color:"#B77FAE"}} size={60}/>
            <h3>Highly Qualified And Experienced Doctor</h3>
            <p>Our expert dermatologist ensures the best and safer treatments for your skin and hair concerns. At Healthy Skin Co, your privacy and wellness are our priority.</p>
            <div className={styles.buttondiv}>
                {/* <button className={styles.navButton}>Book Now</button> */}
                {/* &nbsp;&nbsp; */}
               
              </div>
        </div>
      </article>
    </section>
  );
};
export default About2;
