import React from 'react';
import '../profile.css';


const ParamBtn = (props) => {

  const btnClick =(id)=>{
    if(id === 1){
      props.ProfileSection()
    } else if(id === 2){
      props.SettingSection();
    } 
  }

  return (
      <>
            <button onClick={ ()=> btnClick(props.id)}  className='param-btn'><h3>{props.btnName}</h3></button>
      </>
  )
};

export default ParamBtn;
