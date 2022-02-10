import React from 'react';

const MessagingBox = (props) => {
  return (
    <div className='message-box-container'>
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
