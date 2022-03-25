import React from 'react';
import './Main.css';
import { useNavigate } from 'react-router';

const Button = ({btnText}) => {
    const btnColor = btnText === 'Join' ? 'rgb(96 , 202 , 247)' : 'rgb(255,250,238)';
    const btnFontColor = btnText === 'Join' ? 'rgb(255,250,238)' : 'black';
    const btnBorder = btnText === 'Join' ? 'none' : 'solid 2px rgb(96 , 202 , 247) ';
    
    const navigate = useNavigate()

    const onClick =()=>{
        if(btnText === 'Join'){
            navigate('/sign-up')
        }else{
            navigate('/login')
        }
    }
    
    return (
        // <div 
        // style={{background:'red' , display:'flex' , flexDirection:'row'}} 
        // >
            <button onClick={ ()=> onClick() } className='btn' style={{
                background : btnColor,
                color: btnFontColor,
                border: btnBorder,
            }}>{btnText}</button>
        // </div>
    )
}

export default Button
