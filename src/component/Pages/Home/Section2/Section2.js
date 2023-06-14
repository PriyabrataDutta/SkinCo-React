import styles from "./Section2.module.css";

const Section2 = () => {
  return (
    <div className={styles.section_3_main}>
      <div className={styles.title_content}>
        {/* <h4>
            WE ARE COMMITTED TO PROVIDING OUR SALON CLIENTS STUNNING
            BEAUTY
            SERVICES
          </h4> */}
        <h1>Our Top Treatments</h1>
      </div>
      <div className={styles.sub_section_3}>
        <div>
          <div className={styles.flip_card}>
            <div className={styles.flip_card_inner}>
              <div className={styles.flip_card_front}>
                <h1>Chemical peels</h1>
                <p>
                
                </p>
                <img
                  src="https://ik.imagekit.io/0rsvz9vomoe/Chemical_peels_qMWwJcnh-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665404983497"
                  alt="Avatar"
                  style={{ width: "30%", padding: "5%" }}
                />
              </div>
              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(50, 50, 50, 0.73)), url('https://ik.imagekit.io/0rsvz9vomoe/skin-co/Chemical-peels_vPATDbYLk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665747769608')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize:"cover",
                  width:"100%",
                }}
                className={styles.flip_card_back}
              >
                <h1>Chemical peels</h1>
                <p>
                A chemical peel is a procedure in which the top layers of skin (dead skin cells) are removed by applying a chemical solution to the face, neck, or hands to promote the growth of new cells and helps in rejuvenation.
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.flip_card}>
            <div className={styles.flip_card_inner}>
              <div className={styles.flip_card_front}>
              <h1>PRP treatment</h1>
                <p>
                </p>
                <img
                  src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/PRP-treatment_S0o7ksnSv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665746528658"
                  alt="Avatar"
                  style={{ width: "30%", padding: "5%" }}
                />
              </div>
              <div  style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(50, 50, 50, 0.73)), url('https://ik.imagekit.io/0rsvz9vomoe/skin-co/PRP-treatment_-cyM1NdOq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665746528766')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize:"cover",
                  width:"100%",
                }}
               className={styles.flip_card_back}>
                 <h1>PRP treatment</h1>
                <p>
                Platelet-rich plasma treatment is a natural treatment where patients blood is collected and placed into a device called centrifuge machine that separates other components of the blood from platelets and concentrates them with plasma. This treatment stimulates hair growth, restores natural skin, and treats acne scars overall helps in skin-rejuvenation and hair growth.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.flip_card}>
            <div className={styles.flip_card_inner}>
              <div className={styles.flip_card_front}>
              <h1>Medi facial</h1>
                <p>
                </p>
                <img
                  src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/Medi-facial_V6jXMfgR_Y.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665746795478"
                  alt="Avatar"
                  style={{ width: "30%", padding: "5%" }}
                />
              </div>
              <div  style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(50, 50, 50, 0.73)), url('https://ik.imagekit.io/0rsvz9vomoe/skin-co/Medi-facial_oDMnkhhY7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665746795264')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize:"cover",
                  width:"100%",
                }} className={styles.flip_card_back}>
                    <h1>Medi facial</h1>
                <p>
                A new age treatment that combines medicine and facial. This treatment uses active ingredients and anti antioxidants , which provides instant skin radiance without any side effects.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.flip_card}>
            <div className={styles.flip_card_inner}>
              <div className={styles.flip_card_front}>
              <h1>Botulinum toxin</h1>
                <p>
                </p>
                <img
                  src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/Botox_b_91_FWdz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665747643727"
                  alt="Avatar"
                  style={{ width: "30%", padding: "5%" }}
                />
              </div>
              <div  style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(50, 50, 50, 0.73)), url('https://ik.imagekit.io/0rsvz9vomoe/skin-co/Botox_QeUOerf0N.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665747643788')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize:"cover",
                  width:"100%",
                }} className={styles.flip_card_back}>
                    <h1>Botulinum toxin</h1>
                <p>
                Botulinum toxin injection is a safe and effective method to reduce muscle over activity, there by reduce facial wrinkles. This helps in overall skin rejuvenation.
                </p>               
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.flip_card}>
            <div className={styles.flip_card_inner}>
              <div className={styles.flip_card_front}>
              <h1>Dermal Fillers</h1>
                <p>
                </p>
                <img
                  src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/ELECTROCAUTERY_63YiJ1G3D.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665747050530"
                  alt="Avatar"
                  style={{ width: "30%", padding: "5%" }}
                />
              </div>
              <div style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(50, 50, 50, 0.73)), url('https://ik.imagekit.io/0rsvz9vomoe/skin-co/ELECTROCAUTERY_LDMR_GTYl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665747050554')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize:"cover",
                  // opacity:"0.4",
                  width:"100%",
                  // opacity:"0.3",
                }} className={styles.flip_card_back}>
                  <div className={styles.backconetent}>
                  <h1>Dermal Fillers</h1>
                <p>
                  Derna fillers are soft, gel like substance, that are injected into various layers of the skin (based on the desired effects) which help in restoring volume and gives you younger appearence.
                 </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.flip_card}>
            <div className={styles.flip_card_inner}>
              <div className={styles.flip_card_front}>
              <h1>Derma roller</h1>
                <p>
                </p>
                <img
                  src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/Derma-roller_L5RsVVcMt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665747164886"
                  alt="Avatar"
                  style={{ width: "30%", padding: "5%" }}
                />
              </div>
              <div style={{
                   backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(50, 50, 50, 0.73)), url('https://ik.imagekit.io/0rsvz9vomoe/skin-co/Derma-roller_OoYfvXYNE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665747164663')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize:"cover",
                  width:"100%",
                 
                }} className={styles.flip_card_back}>
                  <h1>Derma roller</h1>
                <p>
                A derma roller is a skincare device made up of minute needles which can pierce the skin and trigger a healing response. It is used to treat acne scars and pigmentation. Regular use can help achive a uniform skin texture and tone.
                </p>
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default Section2;
