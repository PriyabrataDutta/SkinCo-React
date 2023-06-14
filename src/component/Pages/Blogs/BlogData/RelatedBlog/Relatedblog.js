import styles from "./Relatedblog.module.css";
import prevblog from "../../Blog.json";
import { Link, useParams } from "react-router-dom";

const Relatedblog = () => {
  const id = useParams();
  let x;
  for (let key in id) {
    x = id[key];
  }
  const prevData = (prev, y) => {
     let z = [];
     z?.push(prev[y] ,prev[y-1])
     console.log(z ,'kkk')
    
    return z
  };

  x =  prevData(prevblog , x)
  
  return (
    <div className={styles.relatedservice}>
      {/* {prevblog.map((content , index)=>(<div> <p>vaa</p> </div>))} */}
      <h1>Previous Blogs</h1>
      {x.map((Previous)=>(<div className={styles.historyservices}>
          <div>
            <img src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/test_purpose/rec-cas-1_-i9XO4iT1z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668494530135" />
          </div>
          <div className={styles.contentdiv}>
            <p>{Previous?.title}</p>
            <p>
              <span>{Previous?.date}</span>
            </p>
          </div>
        </div>))}
    </div>
  );
};
export default Relatedblog;
