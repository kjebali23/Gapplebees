import React from 'react';

const Divider = (props) => {
  return (
    <div className='divider' style={{
        // background:'red',
        height:'7rem',
        width:'100%',
        marginTop:'0.5rem',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }}>
        <h1>{props.divTitle}</h1>
</div>
  )
};

export default Divider;
