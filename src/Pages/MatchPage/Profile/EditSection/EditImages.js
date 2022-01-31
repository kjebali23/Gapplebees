import React from 'react';
import Card from './Card';



const EditImages = () => {
  return (
    <>
    <div className='img-conatainer' style={{width:'100%',height:'90vh' ,background:'pink', display:'flex' , justifyContent:'center', alignItems:'center'  }}>
        <div className="cards" style={{width:'50%', height:'25rem' , background:'blue', borderRadius:'2rem'}}>
            
            <Card/>
        </div>
    </div>
    </>
  )
};

export default EditImages;
