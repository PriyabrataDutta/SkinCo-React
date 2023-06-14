import React from 'react'
import ContactBanner from './ContactBanner/ContactBanner'
import ContactForm from './ContactForm/ContactForm'

function Contact() {
  return (
    <div style={{backgroundColor:"black"}}> 
      <ContactBanner/>
      <ContactForm/>
    </div>
  )
}

export default Contact
