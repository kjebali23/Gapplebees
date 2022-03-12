import React, {useState} from 'react';
import EditProfile from './EditProfile/EditProfile';
import Paramters from './Parameters/Paramters';
import AccountSettings from './AccountSettings/AccountSettings';
import Logout from './Logout/Logout';
import './ProfileSection.css'
import { useSelector} from 'react-redux';


const Profile = () => {
  const params = useSelector((state) => state.parameter.value);


  return (
      <>
        <div className="container">
          <div className='parameter-section'>
            <Paramters/>
          </div>

          <div className='main-section'>       
              {params === 1 && <EditProfile/>}
              {params === 2 && <AccountSettings/>}
              { params === 3 &&  <Logout/>} 
          </div>
        </div>
      </>
  )
};

export default Profile;
