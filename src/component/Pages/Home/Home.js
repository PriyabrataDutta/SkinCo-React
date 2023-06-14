import React from 'react'
import img1 from '../../../assets/images/hair-salon1.jpg'
import Footer from '../../Footer/Footer'
import Banner from './Banner/Banner'
import styles from './Home.module.css'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'

function Home() {
  return (
    <div style={{backgroundColor:"black"}}>
      <main>
        <Banner/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
      </main>      
    </div>
  )
}

export default Home
