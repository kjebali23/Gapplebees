import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const MessagingBox = (props) => {
  return (
    <div className='message-box-container'>
      <div className='message-box-header'>
      <div className='back-icon' onClick={()=>props.displayMessaging()}>
      <ArrowBackIosIcon/>
      </div>
      <div className='match-name' style={{}}>
        <h3>PlaceHolder</h3>
        </div>
      </div>
    <div className='message-box'>
      
      <ul>
        {props.usersMessages.map((message)=>
        <li>{message}</li>
        )}
      </ul>
    </div>
    </div>
  )
};

export default MessagingBox;
