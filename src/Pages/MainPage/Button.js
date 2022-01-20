import React from 'react'

const Button = ({btnText}) => {
    const btnColor = btnText === 'Join' ? 'rgb(96 , 202 , 247)' : 'rgb(255,250,238)';
    const btnFontColor = btnText === 'Join' ? 'rgb(255,250,238)' : 'black';
    const btnBorder = btnText === 'Join' ? 'none' : 'solid 2px rgb(96 , 202 , 247) ';
    return (
        <div>
            <button style={{
                height:'36px',
                width:'20vh',
                margin:'0.5rem',
                background : btnColor,
                color: btnFontColor,
                border: btnBorder,
                fontSize:'18px',
                fontWeight: 'bold',
                cursor:'pointer'
            }}>{btnText}</button>
        </div>
    )
}

export default Button
