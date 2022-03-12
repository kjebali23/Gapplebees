import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useDispatch } from 'react-redux';
import { dashboard } from '../../../../redux/counter';

const BackBtn = () => {
  const dispatch = useDispatch()
  return (
    <div className='back-btn' onClick={()=> dispatch(dashboard())}>
        <ArrowBackIosIcon/>
    <h4>Go back to the Main Page</h4>
  </div>
  )
};

export default BackBtn;
