import React, { useState } from "react";
import styles from "./DoctorKnowMore.module.css";
import { FaFlask } from "react-icons/fa";
import FormModal from "../../../UI/Modal/FormModal";

function DoctorKnowMore() {
  const [formModal , setFormModal] = useState(false)
  return (
    <div className={styles.main_continer}>
      {formModal &&<FormModal onClick = {()=>{setFormModal(false)}}/>}
      <main className={styles.DoctorContainer}>
        <section className={styles.DoctorAboutContainer}>
          <article className={styles.DoctorImageContainer}>
            <section className={styles.DoctorImage}>
              <img src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/New_Project__1__RdtEb69kq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672376060931" />
              <article className={styles.DoctorTitle}>
                <section>
                  <p> Dr. Soumya Soragavi</p>
                  <p> MD - Dermatology , Venereology & Leprosy </p>
                </section>
              </article>
            </section>
          </article>
          <article className={styles.DoctorDesc}>
            <p>
            Dr Soumya is a highly qualified dermatologist with a fellowship in cosmetology and aesthetic medicine. She has an extensive knowledge of skin conditions, treatments and procedures, and is able to offer a wide range of treatments tailored to the individual needs of her patients. Dr Soumya is committed to providing the highest quality of care to her patients and her experience and expertise in the field of dermatology makes her a leading authority in her field. Dr Soumya is passionate about helping people improve their self-confidence and skin health, and strives to deliver the best results for her patients.
            </p>
            {/* <p>
            Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available but the majority. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.
            </p> */}
            <div style={{ marginTop: "25px" }}>
          <button onClick={()=>{setFormModal(true)}} className={styles.navButton}>Book an Appointment</button>   
          </div>
            {/* <button>Click Here</button> */}
          </article>
        </section>
        {/* <section className={styles.DoctorSpecialitiesContainer}>
          <article>
            <FaFlask />
            <h3>Appointments</h3>
            <p>
              Same/next-day appointments, in person or over video, that start on
              time
            </p>
          </article>
          <article>
            <FaFlask />
            <h3>Appointments</h3>
            <p>
              Same/next-day appointments, in person or over video, that start on
              time
            </p>
          </article>
          <article>
            <FaFlask />
            <h3>Appointments</h3>
            <p>
              Same/next-day appointments, in person or over video, that start on
              time
            </p>
          </article>
        </section> */}
      </main>
    </div>

  );
}

export default DoctorKnowMore;
