import React from 'react';
import '../ProfileSection.css'

const UserForm = (props) => {
  console.log(props.userInfo)
  return (
      <>
        <form className='user-form'>
            <div className='user-form-group'>
            <label className='user-form-label'>UserName :</label>
            <input className='user-form-input' readOnly value={props.userInfo.UserName}></input>
            </div>
            <div className='user-form-group'>
            <label className='user-form-label'>Car Make :</label>
            <input className='user-form-input' readOnly value={props.userInfo.CarManufacturer} ></input>
            </div>
            <div className='user-form-group'>
            <label className='user-form-label'>Car Model :</label>
            <input className='user-form-input' readOnly value={props.userInfo.CarModel}></input>
            </div>
        </form>
      </>
  )
};

export default UserForm;
