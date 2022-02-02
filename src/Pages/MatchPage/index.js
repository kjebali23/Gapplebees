import React, {useState} from 'react';
import Dashboard from './Dashboard/Dashboard';
// import MatchSection from './MatchSection/MatchSection';
import Match from './Match/Match';
import Profile from './Profile/Profile';

export default function SimpleContainer() {
  
  const [profileSection, setProfileSection]= useState(false);


  const renderProfile = ()=>{
    setProfileSection(!profileSection);
  }


  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      background:'whiteSmoke',
      width:'100%',
      height:'100vh',
    }}>
    <Dashboard displayProfile={renderProfile} />
    {profileSection === false && (
    <Match/>
    )}
    {profileSection === true && <Profile displayProfile={renderProfile}  />}

    </div>
)
  }

