import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import Match from './Match/Match';
import Profile from './Profile/Profile';
import Messaging from './Messaging/Messaging';
import './Matchpage.css';
import { useSelector } from 'react-redux';

export default function SimpleContainer() {

  const displayPage = useSelector((state) => state.counter.value)



  return (
    <div className='matchpage' >
    <Dashboard/>
    {displayPage === 0 && <Match/>}
    {displayPage === 1 && <Profile/>}
    {displayPage ===2 && <Messaging/>}
    </div>
)
  }
