import React from 'react';
import Divider from './Divider';
import AllCards from './AllCards'


const Features = () => {
  return (
      <>
         <Divider divTitle={'How does it work?'}/>
        
        <div className="wraper" style={{  background: 'linear-gradient(0deg, rgba(58,97,234,1) 0%, rgba(100,216,242,1) 100%)'}}>
            <AllCards/>
        </div>
      </>
  )
};

export default Features;
