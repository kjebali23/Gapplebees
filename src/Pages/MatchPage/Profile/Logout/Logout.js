import React from 'react';
import LogoutBtn from './LogoutBtn';

const Logout = (props) => {
  return (
      <>
        <div className='logout-section-container'>
                <div className='logout-modal'>
                  <div className="logout-modal-title">
                      <h2>Are you sure you want to log out of <br/> Gapplebees ?</h2>
                  </div>
                  <div className='logout-section-btn-container'>
                    <LogoutBtn btnName='Log out'/>
                    <LogoutBtn showmodal={props.showmodal} btnName='Cancel'/>
                  </div>
                </div>
            </div>
      </>
  )
};

export default Logout;
