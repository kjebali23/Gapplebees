import React from 'react';
import Divider from './Divider';
// import AllCards from './AllCards'
import Cards from './Cards'


const Features = () => {
  return (
      <>
         <Divider divTitle={"What's on the Menu?"}/>
        
        <div className="feature-wraper">
            <Cards id={1} />
            <Cards id={2} />
            <Cards id={3} />
        </div>
      </>
  )
};

export default Features;
