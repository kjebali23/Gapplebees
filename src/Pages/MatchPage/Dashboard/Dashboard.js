import React from 'react';
import { Avatar } from '@mui/material';
import Badge from '@mui/material/Badge';
import SpeedIcon from '@mui/icons-material/Speed';

const Dashboard = (props) => {
  const imageLink ="https://images.unsplash.com/photo-1631819825505-4291831187ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60";
  return (
      // <div style={{background:'yellow'}}>
        
        <div className='dashboard'>
            <div className='user-info'>
            <div 
            className='click-user-info' 
              onClick={()=> props.displayProfile()} >
              
              <Avatar src={imageLink}/>              
              <h3 className='user-name'>khalil</h3>
            </div>
            </div>

            <div className='dashboard-title'>
                <h1>Gapplebees</h1>
            </div>

            <div className='message-section-btn'>  
              <div className='click-message-section-btn' onClick={()=> props.displayMessaging() }>
              <Badge>
                <SpeedIcon/>
              </Badge>
              </div>
            </div>


        </div>
        
      // </div>
  )
};

export default Dashboard;
