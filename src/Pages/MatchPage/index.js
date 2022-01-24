import React from 'react';
import Dashboard from './Dashboard/Dashboard';
// import MatchSection from './MatchSection/MatchSection';
import Match from './Match/Match';

export default function SimpleContainer() {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      background:'whiteSmoke',
      width:'100%',
      height:'100vh',
      background:'whitesmoke'
    }}>
    <Dashboard/>
    <Match/>
    </div>
)
  }

