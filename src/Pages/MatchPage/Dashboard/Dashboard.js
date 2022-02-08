import React from 'react';
import { Avatar } from '@mui/material';
import Badge from '@mui/material/Badge';
import SpeedIcon from '@mui/icons-material/Speed';

const Dashboard = (props) => {
  const imageLink ="https://images.unsplash.com/photo-1631819825505-4291831187ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60";
  return (
      <div>
        
        <div className='dashboard'>
            
            <div className='user-info' 
              onClick={()=> props.displayProfile()} >
              
              <Avatar src={imageLink}/>              
              <h3 className='user-name'>khalil</h3>
            </div>

            <div className='dashboard-title'>
                <h1>Gapplebees</h1>
            </div>

            <div onClick={()=> props.displayMessaging() } className='message-section-btn'>  
              <Badge>
                <SpeedIcon/>
              </Badge>
            </div>


        </div>
        
      </div>
  )
};

export default Dashboard;
