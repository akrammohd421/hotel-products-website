import React from 'react'
import Breadcrumb from './AboutComponents/BreadCrumb'
import AboutSection from './HomeComponents/AboutSection'
import CoreValues from './AboutComponents/CoreValues'
import MissionVision from './AboutComponents/MissionVision'

const About = () => {
    document.title = "Solar Pannels | Global Quality Deivered"
  return (
    <div>
      <Breadcrumb/>  
      <AboutSection/>
       <MissionVision/>
      <CoreValues /> 
     
    </div>
  )
}

export default About