import React from 'react';

const test = () => {
  let width = window.innerWidth;
  if(width > 500){
    return (
        <>
            <h1>Te5dem Nayek</h1>
        </>

  )}else{
      return(
          <>
          <h1>Jareb trah</h1>
          </>
      )
  }
};


export default test;
