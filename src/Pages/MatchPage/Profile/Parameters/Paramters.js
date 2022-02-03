import React, {useState} from 'react';
import ParamBtn from './ParamBtn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../profile.css';


const Paramters = (props) => {


  return (
      <>
        <div style={{display:'flex' , flexDirection:'row',alignItems:'center', justifyContent:'center' , background:'white'  , width:'100%', height:'2.5rem',border:'solid 1px rgb(69,101,226)',
         borderTop:'solid 1px rgb(69,101,226)'
         }}>
          <ArrowBackIosIcon/>
          <h4 style={{color:'black'}} onClick={props.displayProfile} >Go back to Main Page</h4>
        </div>
        <div className="params-container">
            <ParamBtn ProfileSection={props.ProfileSection} id={1}  btnName={'Edit Profile'}/>
            <ParamBtn SettingSection={props.SettingSection} id={2} btnName={'Settings'}/>
            <ParamBtn showmodal={props.showmodal} btnName={'Log out'}/>            
        </div>
      </>
  )
};

export default Paramters;
