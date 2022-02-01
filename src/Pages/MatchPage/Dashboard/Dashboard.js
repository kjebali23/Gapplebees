import React, {useState} from 'react';
import { Avatar } from '@mui/material';
import Badge from '@mui/material/Badge';
import SpeedIcon from '@mui/icons-material/Speed';

const Dashboard = (props) => {

  return (
      <>
      <div>
        
        <div style={{width:'100%' , background:'white', paddingLeft:'1rem' , paddingRight:'1rem' , height:'4rem', display:'flex', flexDirection:'row' , alignItems:'center', justifyContent:'space-between'}}>
            
            <div  onClick={()=> props.displayProfile() }className='user-info' style={{display:'flex', flexDirection:'row' , alignItems:'center' , width:'33%'}}>
              <Avatar src="https://images.unsplash.com/photo-1631819825505-4291831187ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF6ZGElMjBtaWF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>              
              <h3 style={{marginLeft:'0.5rem'}}>Name</h3>
            </div>

            <div className='title' style={{width:'33%', textAlign:'center'}}>
                <h1 style={{color:'rgb(69, 101, 226)'}}>Gapplebees</h1>
            </div>

            <div className='match-section-btn' style={{ width:'33%', display:'flex' , justifyContent:'flex-end'}}>  
              <Badge>
                <SpeedIcon/>
              </Badge>
            </div>


        </div>
        
      </div>
      </>
  )
};

export default Dashboard;
