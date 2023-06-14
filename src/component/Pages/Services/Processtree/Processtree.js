import React from "react";
import styles from "./Processtree.module.css";

function Processtree() {
  return (
    <div className={styles.mainDivision}>
      <div className={styles.heading}>
        <p>HOW OUR PROCESS WORKS</p>
        <h1>Simple 4-Step System</h1>
      </div>
      <div className={styles.processdiv}>
        <div className={styles.container}>
          <div className={styles.circle}>
            <span>1</span>
          </div>
          <div className={styles.arrow}></div>
          <div className={styles.discription}>
            <h2>Strategy</h2>
            <p>
              The first step involves an onsite visit from a computer works
              expert.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.circle}>
            <span>2</span>
          </div>
          <div className={styles.arrow}></div>
          <div className={styles.discription}>
            <h2>Strategy</h2>
            <p>
              The first step involves an onsite visit from a computer works
              expert.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.circle}>
            <span>3</span>
          </div>
          <div className={styles.arrow}></div>
          <div className={styles.discription}>
            <h2>Strategy</h2>
            <p>
              The first step involves an onsite visit from a computer works
              expert.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.circle}>
            <span>4</span>
          </div>
          <div className={styles.discription}>
            <h2>Strategy</h2>
            <p>
              The first step involves an onsite visit from a computer works
              expert.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Processtree;
