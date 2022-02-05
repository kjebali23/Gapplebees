import React from 'react';
import ContactForm from './ContactForm';
import Divider from './Divider';

const Contact = () => {
  return (
      <>
         <Divider divTitle={'Contact Us'} />
         <div className='contact-form-wraper'>
           {/* <p>test</p> */}
         <ContactForm />
         </div>
      </>      
  )
};

export default Contact;
