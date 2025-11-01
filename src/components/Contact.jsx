import React from 'react'
import ContactBreadCrumb from './contact/ContactBreadCrumb'
import ContactSection from './contact/FormSection';
import ContactDetail from './contact/ContactDetail';

const Contact = () => {
  return (
    <div>
        <ContactBreadCrumb />
        <ContactDetail />
        
        <ContactSection />
    </div>
  )
}

export default Contact;