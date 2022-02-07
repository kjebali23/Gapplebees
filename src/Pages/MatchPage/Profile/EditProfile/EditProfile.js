import React from 'react';
import CardSection from './CardSection';
import UserInfo from './UserInfo';

const EditProfile = () => {
  return (
      <>
        <div className="editing-container">
            <div className='edit-section-title'>
                <h3>Profile</h3>
            </div>
            <CardSection/>
            <UserInfo/>
        </div>
      </>
  )
};

export default EditProfile;
