import React from 'react';
import LogoutBtn from './LogoutBtn';

const Logout = (props) => {
  return (
      <>
        <div style={{background:'rgba(0,0,0,.5)',backdropFilter:' blur(2px) ', width:'100%' , height:'100vh', position:'absolute' , top:'0' , left:'0', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div style={{background:'whitesmoke' , width:'35%' , height:'14rem', borderRadius:'0.5rem' , display:'flex' , flexDirection:'column' , alignItems:'center' , paddingTop:'2rem'}}>
                  <div className="title">
                      <h2 style={{textAlign:'center'}}>Are you sure you want to log out of <br/> Gapplebees ?</h2>
                  </div>
                  <div style={{ marginTop:'1.3rem' , width:'50%' , height:'6rem' , display:'flex' , flexDirection:'column', justifyContent:'space-around' , alignItems:'center'}}>
                    <LogoutBtn btnName='Log out'/>
                    <LogoutBtn showmodal={props.showmodal} btnName='Cancel'/>
                  </div>
                </div>
            </div>
      </>
  )
};

export default Logout;
