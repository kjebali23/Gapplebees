import React from 'react';
import ParamBtn from './ParamBtn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import BackBtn from './BackBtn';


const Paramters = (props) => {


  return (
      <>
        {/* <div className='back-btn' onClick={props.displayProfile}>
          <ArrowBackIosIcon/>
          <h4>Go back to the Main Page</h4>
        </div> */}
        <BackBtn displayProfile={props.displayProfile} />
        <div className="params-container">
            <ParamBtn ProfileSection={props.ProfileSection} id={1}  btnName={'Edit Profile'}/>
            <ParamBtn SettingSection={props.SettingSection} id={2} btnName={'Settings'}/>
            <ParamBtn showmodal={props.showmodal} id={3} btnName={'Log out'}/>            
        </div>
      </>
  )
};

export default Paramters;
