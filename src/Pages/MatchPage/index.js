import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import Match from './Match/Match';
import Profile from './Profile/Profile';
import Messaging from './Messaging/Messaging';
import './Matchpage.css';
import { useSelector } from 'react-redux';
import { useInfo } from '../../Hooks/useUserData';


export default function SimpleContainer() {



  const displayPage = useSelector((state) => state.counter.value)

  const {error , data , loading } = useInfo("622e910c19ebfba7441f7310")



  return (
    <div className='matchpage' >
    <Dashboard/>
    {displayPage === 0 && <Match/>}
    {displayPage === 1 && <Profile userData = {data.getUser} />}
    {displayPage ===2 && <Messaging userMatchs = {data.getUser.Matchs} />}
    </div>
)
  }
