import React from 'react';
import Container from '@mui/material/Container';
import Dashboard from './Dashboard/Dashboard';
import MatchSection from './MatchSection/MatchSection';

export default function SimpleContainer() {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      background:'whiteSmoke',
      width:'100%',
      height:'100vh'
    }}>
    <Dashboard/>
    <MatchSection/>
    </div>
)
  }

