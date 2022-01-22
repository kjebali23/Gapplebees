import React from 'react'
import Button from './Button'
import About from './About'
import Features from './Features'
import Footer from '../../component/Navbar/Footer'
import Contact from './Contact'
import Navbar from '../../component/Navbar'

const Main = () => {
    return (
        
        <body>
            <Navbar/>
        <div className="container" style={{
            height: '90vh',
            display:'flex',
            justifyContent:'center',
        }}>
            <div className="main-background" style={{
                width:'95%',
                display:'flex',
                justifyContent:'center',
                background: 'rgb(58,97,234)',
                background: 'linear-gradient(348deg, rgba(58,97,234,1) 0%, rgba(100,216,242,1) 100%)',
            }}>
                <div className="slogan-holder" style={{
                    width:'60%',
                    alignSelf:'center',
                    textAlign:'center',
                    height:'35%',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:'column',
                    paddingTop:'1.5rem',
                    color:'black',
                    boxShadow: '3px 7px 51px -6px rgba(0,0,0,0.69)',
                    background: 'rgb(255,255,255)',
                    background: 'linear-gradient(171deg, rgba(255,255,255,1) 24%, rgba(186,199,245,1) 100%)',
                }}>
                    <h1 style={{fontWeight:'bold'}}>It's never too late to take someone to Gapplebees.</h1>
                    <p>Let the world see your shitbox and see who thinks he can race you.</p>
                    <div className="mainBtns">
                        <Button btnText={'Join'}/>
                        <Button btnText={'Sign in'} />
                    </div>
                </div>
                
                
            </div>
         </div>
            <About/>

            <Features/>

            <Contact />
    
            <Footer />
        </body>
        

    )
}

export default Main
