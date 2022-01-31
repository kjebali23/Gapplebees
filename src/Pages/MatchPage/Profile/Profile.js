import React from 'react';
import EditImages from './EditSection/EditImages';
import Paramters from './Parameters/Paramters';
import Card from './EditSection/Card.js';

const Profile = () => {
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
          border:'solid 5px whitesmoke' 
          // borderTop:'solid 5px whitesmoke' , 
          // borderRight:'solid 5px whitesmoke'
          }}>
            <Paramters/>
          </div>

          <div className='modification-section' style={{background:'whitesmoke', width:'75%', border:'solid 5px whitesmoke'}}>
            <div className='title' style={{background:'white', height:'2.5rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <h2>Profile</h2>
            </div>
          <EditImages/>
          </div>

        </div>
      </>
  )
};

export default Profile;
