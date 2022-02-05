import React from 'react'
import Button from './Button'
import About from './About'
import Features from './Features'
import Footer from '../../component/Navbar/Footer'
import Contact from './Contact'
import Navbar from '../../component/Navbar'

import './Main.css'

const Main = () => {
    return (
        
        <>
            <Navbar/>
        <div className="container" >
            <div className="main-background" >
                <div className="slogan-holder" >
                    <h1 className='title'>It's never too late to take someone to  Gapplebees.</h1>
                    <p className='text' >Let the world see your shitbox and see who thinks he can race you.</p>
                    <div className="mainBtns" style={{width:'100%', marginTop:'1.5rem' ,height:'36px'}}>
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
        </>
        

    )
}

export default Main
