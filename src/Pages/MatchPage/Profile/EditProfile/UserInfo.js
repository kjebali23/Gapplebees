import React from 'react';
import UserForm from './UserForm';

const UserInfo = () => {
  return (
      <>
        <div className='user-info-container'>
            <div className='user-info-section'>
                <div className='user-info-section-title' style={{alignSelf:'center'}}>
                    <h3>User Info:</h3>
                </div>
                <UserForm/>
            </div>
        </div>
      </>
  )
};

export default UserInfo;
