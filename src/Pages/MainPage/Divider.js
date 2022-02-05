import React from 'react';
import './Main.css'

const Divider = (props) => {
  return (
    <div className='divider' style={{
       
        // marginTop:'0.5rem',
      
    }}>
        <h1>{props.divTitle}</h1>
</div>
  )
};

export default Divider;
