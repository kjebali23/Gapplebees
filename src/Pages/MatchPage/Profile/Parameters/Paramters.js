import React from 'react';
import ParamBtn from './ParamBtn';
import '../profile.css'
const Paramters = () => {
  return (
      <>
        <div className="params-container">
            <ParamBtn btnName={'Edit Profile'}/>
            <ParamBtn btnName={'Settings'}/>
            <ParamBtn btnName={'Log out'}/>            
        </div>
      </>
  )
};

export default Paramters;
