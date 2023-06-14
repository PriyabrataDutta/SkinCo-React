import React from 'react'
import Aboutdoctor from '../Aboutdoctor/Aboutdoctor'
import About1 from './About1/About1'
import About2 from './About2/About2'
import About3 from './About3/About3'
import About4 from './About4/About4'
import About5 from './About5/About5'
import VisionMission from './AboutVisionMission/VisionMission'
import AboutWelcome from './AboutWelocome/AboutWelcome'

function About() {
  return (
    <div style={{backgroundColor:"black"}} >
     <About1/>
     <AboutWelcome/>
     <Aboutdoctor/>
     <About2/>
     <VisionMission/>
     {/* <About3/> */}
     {/* <About4/> */}
     <About5/>
    </div>
  )
}

export default About
