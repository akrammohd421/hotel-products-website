import React from 'react'
import SolarPanelsBreadCrumb from './SolarPanelsComponents/SolarPanelsBreadCrumb'
import SolarPanelProduct from './SolarPanelsComponents/SolarPanelProduct'
import CtaSection from './SolarPanelsComponents/CtaSection'

const SolarPanels = () => {
  return (
    <div>
        <SolarPanelsBreadCrumb/>
        <SolarPanelProduct/>
        <CtaSection/>
    </div>
  )
}

export default SolarPanels