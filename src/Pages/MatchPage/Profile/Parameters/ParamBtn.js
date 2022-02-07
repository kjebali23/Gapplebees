import React from 'react';
import { Box } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const ParamBtn = (props) => {

  return (
      <>
            <button className='param-btn' onClick={ ()=> {props.id === 1 ? props.ProfileSection() : props.id === 2 ? props.SettingSection() : props.showmodal()}} >
               <Box className='icon-box' >
               {props.id === 1 && <AccountCircleIcon className='profile-icon'/>} 
               {props.id===2 && <SettingsIcon className='settings-icon' />} 
               {props.id === 3 && <LogoutIcon className ='logout-icon'/>}
               </Box>

               <h3>{props.btnName}</h3></button>
      </>
  )
};

export default ParamBtn;
