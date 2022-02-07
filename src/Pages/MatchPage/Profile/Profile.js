import React, {useState} from 'react';
import EditProfile from './EditProfile/EditProfile';
import Paramters from './Parameters/Paramters';
import AccountSettings from './AccountSettings/AccountSettings';
import Logout from './Logout/Logout';
import './ProfileSection.css'

const Profile = (props) => {

const [section , setSection]= useState(1)

const [logoutModal , setLogoutModal] = useState(false)

const ProfileSection =()=>{
  setSection(1)
}

const SettingSection =()=>{
  setSection(2)
}

const Modal =()=>{
  setLogoutModal(true)
}



  return (
      <>
        <div className="container">

          <div className='parameter-section'>
            <Paramters displayProfile={props.displayProfile}  SettingSection={SettingSection} ProfileSection={ProfileSection} showmodal={Modal}  />
          </div>

          <div className='main-section'>
              
              {section === 1 && <EditProfile/>}
              {section === 2 && <AccountSettings/>}
              
              { logoutModal === true &&  <Logout showmodal={setLogoutModal}/>}

              

          </div>

        </div>
      </>
  )
};

export default Profile;
