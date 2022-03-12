import React from 'react';
import ParamBtn from './ParamBtn';
import BackBtn from './BackBtn';



const Paramters = () => {


  return (
      <>
        <BackBtn/>
        <div className="params-container">
            <ParamBtn 
            id={1}  
            btnName={'Edit Profile'}
            />
            <ParamBtn 
            id={2} 
            btnName={'Settings'}
            />
            <ParamBtn 
            id={3} 
            btnName={'Log out'} 
            />            
        </div>
      </>
  )
};

export default Paramters;
