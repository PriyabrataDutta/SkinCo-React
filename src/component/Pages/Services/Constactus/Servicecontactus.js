import React, { useState } from 'react'
import FormModal from '../../../UI/Modal/FormModal'
import styles from './Servicecontactus.module.css'

function Servicecontactus() {

  const [modal , setModal] = useState(false)

const contactButtonhandler = ()=>{
  setModal(true)
}


  return (
    <div>
    {modal && <FormModal onClick={()=>{setModal(false)}}/>}
    <div className={styles.servicesmain}>
      
      <div className={styles.content}>
        <h1>Have a new project in mind? Start today</h1>
        <p>We are a digital agency that translates your business into a global, oriented strategy.
           Schedule an appointment with us to discuss your goals and needs.</p>
      </div>
      
      <div>
        <button className={styles.contactus} onClick={contactButtonhandler} >Contact Us</button>
      </div>
    </div>
    </div>
  )
}

export default Servicecontactus
