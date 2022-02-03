import React from 'react';
import '../profile.css';


const ParamBtn = (props) => {

  let btnStyle= {
    width: '85%',
    height: '3rem',
    marginTop: '1rem',
    border: 'none',
    // background: 'white',
    borderRadius: '2rem',
  }


  return (
      <>
            <button onClick={ ()=> {props.id === 1 ? props.ProfileSection() : props.id === 2 ? props.SettingSection() : props.showmodal()}}  
            style={btnStyle} className='param-btn'><h3>{props.btnName}</h3></button>
      </>
  )
};

export default ParamBtn;
