import React from 'react';
import { Avatar } from '@mui/material';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


const Dashboard = () => {
  return (
      <>
        <div style={{width:'100%' , background:'white', paddingLeft:'1rem' , paddingRight:'1rem' , height:'4rem', display:'flex', flexDirection:'row' , alignItems:'center', justifyContent:'space-between'}}>
            <Avatar  src="https://images.unsplash.com/photo-1631819825505-4291831187ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
            <h1 style={{color:'black'}}>Gapplebees</h1>
            <Badge badgeContent={4} color="primary">
                <MailIcon color="action" />
            </Badge>

        </div>
      </>
  )
};

export default Dashboard;
