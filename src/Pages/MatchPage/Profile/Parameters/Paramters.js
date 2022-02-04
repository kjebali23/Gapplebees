import React, {useState} from 'react';
import ParamBtn from './ParamBtn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../profile.css';


const Paramters = (props) => {


  return (
      <>
        <div onClick={props.displayProfile} style={{display:'flex' , marginTop:'0.5rem',flexDirection:'row',alignItems:'center', justifyContent:'center' ,
        //  background:'red'  , 
         width:'100%', 
         height:'2.5rem',
         background:'solid 1px rgb(69,101,226)',
        //  borderTop:'solid 1px rgb(69,101,226)'
         }}>
          <ArrowBackIosIcon/>
          <h4 style={{color:'black'}}>Go back to the Main Page</h4>
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
