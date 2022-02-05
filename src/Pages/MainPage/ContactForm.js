import React from 'react';
const ContactForm = () => {
  function sendMail(e){
    e.preventDefault();
    console.log('working');
  }
  return (
    <>
    
      <div className='form-container'>
        <form className='form' onSubmit={sendMail}>
            
            <label>Name:</label>
            <input className='input' type='text' name='name'/>

            <label>Email:</label>
            <input className='input' type='email' name='email'/>

            <label>Message:</label>
            <input className='message-input input' type='text' name='message'/>
            <input className='form-btn'
              type="submit"
              value="Send"
            />

        </form>    
      </div>
    </>  
  )
};

export default ContactForm;
