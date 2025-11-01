import React from 'react'
import ContactBreadCrumb from './contact/ContactBreadCrumb'
import ContactSection from './contact/OwnerDetails';
import ContactDetail from './contact/ContactDetail';
import OwnerDetails from './contact/OwnerDetails';

const Contact = () => {
  return (
    <div>
        <ContactBreadCrumb />
          <OwnerDetails />
        <ContactDetail />
        
      
    </div>
  )
}

export default Contact;