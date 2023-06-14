import styles from './ServiceBanner.module.css'
import data from '../../../ServiceJsonData/Services.json'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

const ServiceBanner  = (props) => {

 const serviceId = useParams()
//  console.log(serviceId)
 let x = []
 
 for (let key in  serviceId)
 {
   x = serviceId[key]
 }
    return(    <div>
      <section className={styles.banner}>
      
        <div className={styles.banner_image}>
          <img
            width="100%"
            src={data[x - 1].headImage}
          />
           <div data-aos="fade-down" className={styles.content}>
          <div >
            <h2>{data[x - 1].title}</h2>
            <span>
            {data[x - 1].bannercontent}
            </span>
            <span className={styles.contentSecond}>
            {data[x - 1].bannercontentsecond}
              
            </span>
          </div>
          <div className={styles.buttonsection}>
          <Link to="/about"><button className={styles.navButton}>Book Now</button></Link>   
          </div>
        </div>
        </div>
      
       
      </section>
    </div>  )

}
export default ServiceBanner


{/* <div>
<section className={styles.banner}>
  <div className={styles.banner_image}>
    <img
      width="100%"
      src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/test_purpose/xab_Uu5Ow2X8U.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668157545039"
    />
     <div data-aos="fade-down" className={styles.content}>
    <div >
        <h2>{data[x - 1].title}</h2>
        <h4>{data[x - 1].bannercontent}</h4>
      </div>
      <button>Book Now</button>
  </div>
 
  </div>
</section>
</div> */}