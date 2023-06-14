import React, { useEffect, useRef } from "react";
import styles from "./FormModal.module.css";
import {AiOutlineClose} from "react-icons/ai";
import emailjs from '@emailjs/browser';

function FormModal(props) {
  const form = useRef();
  
  const sendEmail = (e) =>{
  // e.preventDefault()

    emailjs.sendForm('service_fs61aga', 'template_3jr8676', form.current, 'bkTV_vh-6bOr_p74n')
    .then((result) => {
        console.log(result.text);
        console.log('email sent')
    }, (error) => {
        console.log(error.text);
        console.log('fail')
    });
  }
  return (
    <div>
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <header className={styles.header}>
            <h2>Book an Appointment</h2>
            <p align='end'><AiOutlineClose onClick={props.onClick} size={25}/></p>
          </header>
          <div className={styles.content}>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <br />
              <input type="text"  name = 'name' required/> <br />
              <label>Email</label> <br />
              <input type="email" name="email" required />
              <br />
              <label>Phone No</label>
              <br />
              <input type="tel" name="phno" required /> <br />
              <label>Message </label>
              <br />
              <textarea type="text" name="message"  required/>
              <footer className={styles.actions}>
              <input  type="submit" value="Send" />
          </footer>
             
              {/* <button  type="submit" onClick={props.onClick}>Submit</button> */}
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormModal;
