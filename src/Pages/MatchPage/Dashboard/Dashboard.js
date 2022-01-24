import React from 'react';
import { Avatar } from '@mui/material';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import SpeedIcon from '@mui/icons-material/Speed';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MessageIcon from '@mui/icons-material/Message';

const Dashboard = () => {
  return (
      <>
        <div style={{width:'100%' , background:'white', paddingLeft:'1rem' , paddingRight:'1rem' , height:'4rem', display:'flex', flexDirection:'row' , alignItems:'center', justifyContent:'space-between'}}>
            <Avatar  src="https://images.unsplash.com/photo-1631819825505-4291831187ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
            <h1 style={{color:'rgb(69, 101, 226)', alignSelf:'center'}}>Gapplebees</h1>
            <div className="badges" style={{width:'5%',display:'flex', justifyContent:'space-between'}}>
              <Badge>
                <SpeedIcon/>
              </Badge>
              <Badge badgeContent={4} color="primary">
                  <MessageIcon color="action" />
              </Badge>
            </div>


        </div>
      </>
  )
};

export default Dashboard;
