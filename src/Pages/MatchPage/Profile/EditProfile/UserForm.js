import React from 'react';

const UserForm = () => {

    const inputStyle = {
        width:'10rem', 
        paddingLeft:'0.5rem',
        border:'none',
        borderRadius:'0.2rem',
        marginLeft:'0.5rem',
        fontWeight:'bold'
    }
    const formGroupStyle ={
        display:'flex', 
        flexDirection:'row', 
        marginTop:'0.5rem',
    }

    const labelStyle ={
        width:'6rem',
        fontWeight:'bold'
    }

  return (
      <>
        <form style={{paddingLeft:'1rem', height:'6rem'}}>
            <div className='form-group' style={formGroupStyle}>
            <label style={labelStyle}>UserName :</label>
            <input style={inputStyle} readOnly value='Placeholder'></input>
            </div>
            <div className='form-group' style={formGroupStyle}>
            <label style={labelStyle}>Car Make :</label>
            <input style={inputStyle} readOnly value='Placeholder' ></input>
            </div>
            <div className='form-group' style={formGroupStyle}>
            <label style={labelStyle}>Car Model :</label>
            <input style={inputStyle} readOnly value="Placeholder"></input>
            </div>
        </form>
      </>
  )
};

export default UserForm;
