import React from 'react';
import EditProfile from './EditProfile/EditProfile';
import Paramters from './Parameters/Paramters';

const Profile = (props) => {
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
            <Paramters displayProfile={props.displayProfile}  />
          </div>

          <div className='main-section' style={{background:'whitesmoke', width:'75%', border:'solid 3px whitesmoke'}}>
              <EditProfile/>
          </div>

        </div>
      </>
  )
};

export default Profile;
