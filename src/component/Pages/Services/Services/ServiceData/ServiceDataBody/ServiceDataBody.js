import styles from "./ServiceDataBody.module.css";
import img from "../../../../../../assets/images/services/chemicalpeals/acnescarsurgerymicroneedling.jpg";
import data from '../../../ServiceJsonData/Services.json'
import { useParams } from "react-router-dom";

const ServiceDataBody = () => {

  const serviceId = useParams()
   console.log(serviceId , 'hhhhhh')
  let x = []

  for (let key in serviceId) {
    x = serviceId[key]
  }
  console.log(x , 'suman');



  return (
    <div style={{ backgroundColor: "black" , paddingBottom:"20px"}}>
      <div className={styles.bodyCoontiner}>
        <div className={styles.leftcontainer}>
          {/* <img
            width="100%"
            src={data[x - 1].headImage}
          /> */}
        </div>
      </div>
      <div className={styles.servicecontent}>
        <h1>{data[x - 1].whyTitle}</h1>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: data[x - 1].Htmlbody }} />
      </div>
    </div>
  );
};
export default ServiceDataBody;
