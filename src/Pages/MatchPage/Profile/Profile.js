import React, {useState} from 'react';
import EditProfile from './EditProfile/EditProfile';
import Paramters from './Parameters/Paramters';
import AccountSettings from './AccountSettings/AccountSettings';
import Logout from './Logout/Logout';

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
        <div className="container" style={{
            width:'100%',
            height:'100vh',
            background:'whitesmoke',
            display:'flex',
            flexDirection:'row'

        }}>

          <div className='parameter-section' style={{background:'white', width:'25%' ,
          border:'solid 1px whitesmoke' 
          // borderTop:'solid 5px whitesmoke' , 
          // borderRight:'solid 5px whitesmoke'
          }}>
            <Paramters displayProfile={props.displayProfile}  SettingSection={SettingSection} ProfileSection={ProfileSection} showmodal={Modal}  />
          </div>

          <div className='main-section' style={{background:'whitesmoke', width:'75%', border:'solid 3px whitesmoke'}}>
              
              {section === 1 && <EditProfile/>}
              {section === 2 && <AccountSettings/>}
              
              { logoutModal === true &&  <Logout showmodal={setLogoutModal}/>}

              

          </div>

        </div>
      </>
  )
};

export default Profile;
