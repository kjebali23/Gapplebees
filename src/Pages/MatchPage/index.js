import React, {useState} from 'react';
import Dashboard from './Dashboard/Dashboard';
import Match from './Match/Match';
import Profile from './Profile/Profile';
import Messaging from './Messaging/Messaging';
import './Matchpage.css';

export default function SimpleContainer() {
  
  const [profileSection, setProfileSection]= useState(false);
  const [messagingSection , setMessagingSection] = useState(false);


  const renderProfile = ()=>{
    setProfileSection(!profileSection);
  }

  const renderMessagingSection = ()=>{
    setMessagingSection(!messagingSection);
  }


  return (
    <div className='matchpage' >
    <Dashboard displayProfile={renderProfile} displayMessaging={renderMessagingSection} />
    {profileSection === false && messagingSection === false &&  <Match/>  }
    {profileSection === true &&  <Profile displayProfile={renderProfile}  />}
    {messagingSection === true && profileSection === false && <Messaging displayMessaging={renderMessagingSection}/>}
    </div>
)
  }

