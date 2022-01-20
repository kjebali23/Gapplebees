import React from 'react';
import Cards from './Cards';

const AllCards = () => {
  return (
    <div className='allCards' style={{display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    margin:'0.5rem',
    
    
    }}>
    <Cards id={1} />
    <Cards id={2} />
    <Cards id={3} />
    </div>
  )
};

export default AllCards;
