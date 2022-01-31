import React from 'react';
import '../profile.css';


const ParamBtn = (props) => {
  return (
      <>
            <button className='param-btn'><h3>{props.btnName}</h3></button>
      </>
  )
};

export default ParamBtn;
