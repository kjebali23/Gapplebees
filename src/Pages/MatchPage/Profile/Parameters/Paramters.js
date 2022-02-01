import React, {useState} from 'react';
import ParamBtn from './ParamBtn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../profile.css';


const Paramters = (props) => {


  return (
      <>
        <div style={{display:'flex' , flexDirection:'row',alignItems:'center', justifyContent:'center' , background:'rgb(69,101,226)' , width:'100%', height:'2.5rem', borderTop:'solid 3px whitesmoke'}}>
          <ArrowBackIosIcon/>
          <h4 style={{color:'white'}} onClick={props.displayProfile} >Go back to Main Page</h4>
        </div>
        <div className="params-container">
            <ParamBtn  btnName={'Edit Profile'}/>
            <ParamBtn  btnName={'Settings'}/>
            <ParamBtn  btnName={'Log out'}/>            
        </div>
      </>
  )
};

export default Paramters;
