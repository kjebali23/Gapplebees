import React from 'react';
import CardSection from './CardSection';
import UserInfo from './UserInfo';

const EditProfile = () => {
  return (
      <>
        <div className="container" style={{background:'whitesmoke', height:'90vh' , width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div className='title' style={{width:'100%',height:'2.5rem', background:'white', display:'flex', justifyContent:'center', alignItems:'center', borderBottom:'solid 2px whitesmoke'}}>
                <h3>Profile</h3>
            </div>
            <CardSection/>
            <UserInfo/>
        </div>
      </>
  )
};

export default EditProfile;
