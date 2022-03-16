import React, {useState} from 'react';
import EditProfile from './EditProfile/EditProfile';
import Paramters from './Parameters/Paramters';
import AccountSettings from './AccountSettings/AccountSettings';
import Logout from './Logout/Logout';
import './ProfileSection.css'
import { useSelector} from 'react-redux';
import { useQuery , gql } from '@apollo/client';


// const connectedUser = gql`
//   query{
//     getUser(id:"622e910c19ebfba7441f7310") {
//     UserName
//     Images
//     CarManufacturer
//     CarModel
//    }
//   }
// `


const Profile = (props) => {
  const params = useSelector((state) => state.parameter.value);
  // const {error , data , loading} = useQuery(connectedUser);
  // if (loading){return <div>Loading...</div> }
  // if(error){return <div>Something went wrong</div>}

  return (
      <>
        <div className="container">
          <div className='parameter-section'>
            <Paramters/>
          </div>

          <div className='main-section'>       
              {params === 1 && <EditProfile userData={props.userData} />}
              {params === 2 && <AccountSettings/>}
              { params === 3 &&  <Logout/>} 
          </div>
        </div>
      </>
  )
};

export default Profile;
