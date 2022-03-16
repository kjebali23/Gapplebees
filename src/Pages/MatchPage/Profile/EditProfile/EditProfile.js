import React from 'react';
import CardSection from './CardSection';
import UserInfo from './UserInfo';

const EditProfile = (props) => {
  return (
      <>
        <div className="editing-container">
            <div className='edit-section-title'>
                <h3>Profile</h3>
            </div>
            <CardSection userImages={props.userData.Images}/>
            <UserInfo userInfo={props.userData}/>
        </div>
      </>
  )
};

export default EditProfile;
