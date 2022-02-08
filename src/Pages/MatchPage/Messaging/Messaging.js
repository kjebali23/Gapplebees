import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import BackBtn from '../Profile/Parameters/BackBtn';
// import BackBtn from '../Profile/Parameters/BackBtn';
import MatchedUser from './MatchedUser'

const Messaging = () => {
  return (
      <>
       <div style={{background:'whitesmoke' , height:'91.9vh' , width:'100%' , display:'flex' , flexDirection:'row'}}>
        <div className='user-matches-section' 
            style={{width:'30%', 
            background:'white' , 
            border:'solid 2px whitesmoke' , 
            height:'100%' , 
            marginBottom:'0.5rem' , 
            display:'flex' , 
            flexDirection:'column' , 
            alignItems:'center',
            }}>
            <BackBtn />
            <ul style={{padding:'0.5rem' ,marginTop:'0.5rem',width:'90%',height:'100%',overflow:'scroll' , border:'solid 2px whitesmoke', borderRadius:'1rem' , background:'whitesmoke',background: 'linear-gradient(348deg, rgba(58,97,234,1) 0%, rgba(100,216,242,1) 100%)', }}>
            <MatchedUser/>
            </ul>
        </div>
        <div style={{width:'70%', background:'white' , border:'solid 2px whitesmoke' ,display:'flex' , alignItems:'center' , justifyContent:'center' }}>
            <div className='message-box-container' style={{height:'90%' , width:'95%',     background: 'linear-gradient(348deg, rgba(58,97,234,1) 0%, rgba(100,216,242,1) 100%)', borderRadius:'2rem', display:'flex' , alignItems:'center' , justifyContent:'center'}}>
            <div className='message-box' style={{height:'98%' , width:'98%', background:'white' , borderRadius:'1.8rem'}}>
    
            </div>
            </div>
        </div>
       </div>
      </>
  )
};

export default Messaging;
