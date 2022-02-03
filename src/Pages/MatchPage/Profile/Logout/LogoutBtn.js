import React from 'react';

const LogoutBtn = (props) => {
    const btnBackColor = props.btnName === 'Log out' ? 'linear-gradient(60deg, rgba(58,97,234,1) 0%, rgba(100,216,242,1) 100%)' : 'none';
    const btnColor = props.btnName === 'Log out' ? 'white' : 'black';
    return (
      <>
        <div style={{ width:'70%',height:'2.7rem', display:'flex', justifyContent:'center' , alignItems:'center'}}>
            <button onClick={props.showmodal} style={{background: btnBackColor,color: btnColor ,width:'50%',fontWeight:'bold',textAlign:'center', borderRadius:'1rem' , border:'none' , height:'2.3rem'}}>{props.btnName}</button>
        </div>
      </>
  )
};

export default LogoutBtn;
