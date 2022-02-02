import React from 'react';
import UserForm from './UserForm';

const UserInfo = () => {
  return (
      <>
        <div className='user-info-container' style={{
            background:'rgb(112,179,235)',
            borderRadius:'0.5rem',
            width:'70%',
            height:'10rem',
            marginTop:'0.5rem'
        }}>
            <div className='user-info' style={{marginTop:'0.5rem', display:'flex', flexDirection:'column'}}>
                <div className='section-title' style={{alignSelf:'center'}}>
                    <h3>User Info:</h3>
                </div>
                <UserForm/>
            </div>
        </div>
      </>
  )
};

export default UserInfo;
