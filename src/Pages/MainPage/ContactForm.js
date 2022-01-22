import React from 'react';
const ContactForm = () => {
  function sendMail(e){
    e.preventDefault();
    console.log('working');
  }
  return (
    <>
    
      <div style={{width:'100%', background:'white', marginBottom:'0rem' ,height:'20rem', display:'flex', justifyContent:'center'  }}>
        <form onSubmit={sendMail} style={{display:'flex', flexDirection:'column' ,marginTop:'0rem' ,  borderRadius:'3%', background: 'linear-gradient(0deg, rgba(58,97,234,1) 0%, rgba(100,216,242,1) 100%)', height:'100%', width:'35%' , justifyContent:'flex-start', paddingLeft:'1rem', paddingTop:'2rem' }}>
            
            <label style={{margin:'0.2rem' , fontWeight:'bold'}}>Name:</label>
            <input className='input-field' type='text' name='name' style={{width:'30%', height:'10%',paddingLeft:'0.5rem', marginBottom:'0.2rem', background:'whitesmoke' , border:'none' , borderRadius:'0.2rem'}}/>

            <label style={{margin:'0.2rem' , fontWeight:'bold'}}>Email:</label>
            <input className='input-field' type='email' name='email' style={{width:'50%', height:'10%',paddingLeft:'0.5rem',marginBottom:'0.2rem', background:'whitesmoke', border:'none' , borderRadius:'0.2rem' }}/>

            <label style={{marginTop:'0.3rem' ,marginBottom:'0.2rem' , fontWeight:'bold'}}>Message:</label>
            <input className='input-field' type='text' name='message' style={{width:'70%', height:'25%' ,paddingLeft:'0.5rem', marginBottom:'0.2rem', background:'whitesmoke', border:'none' , borderRadius:'0.5rem'}}/>
            <input 
              type="submit"
              value="Send"
              style={{width:'6rem', height:'2rem', alignSelf:'center', marginTop:'0.5rem'}}
            />

        </form>    
      </div>
    </>  
  )
};

export default ContactForm;
