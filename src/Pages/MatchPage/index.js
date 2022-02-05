import React, {useState} from 'react';
import Dashboard from './Dashboard/Dashboard';
import Match from './Match/Match';
import Profile from './Profile/Profile';
import './Matchpage.css';

export default function SimpleContainer() {
  
  const [profileSection, setProfileSection]= useState(false);


  const renderProfile = ()=>{
    setProfileSection(!profileSection);
  }


  return (
    <div className='matchpage' >
    <Dashboard displayProfile={renderProfile} />
    {profileSection === false && (
    <Match/>
    )}
    {profileSection === true && <Profile displayProfile={renderProfile}  />}

    </div>
)
  }

