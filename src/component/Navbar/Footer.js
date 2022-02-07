import React from 'react'
import { FaFacebookF , FaTwitter , FaLinkedin} from 'react-icons/fa'


const Footer = () => {
    return (
        <div className="footer" style={{
            // background:'linear-gradient(90deg, rgba(58,97,234,1) 0%, rgba(100,216,242,1) 100%)',
            backgroundColor: '#3a61ea',
            backgroundImage: 'linear-gradient(0deg, #3a61ea 0%, #64d8f2 100%)',

            bottom:'0',

            width:'100%',
            height:'15rem',
            marginTop:'1rem',
            display:'flex',
            justifyContent:'center',
            alignItems:'flex-start',

             }}>

                <div className='footer--container' style={{
                    marginTop:'2rem',
                    textAlign:'center',
                    // background:'pink',
                    width:'50%',
                    height:'70%',
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center'
                }}>
                    <h1 style={{color:'black'}}>Gapplebees&copy;</h1>
                    <p style={{marginTop:'1rem', color:'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className='social-icons' style={{
                        // background:'blue',
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'center',
                        width:'25%',
                        height:'30%',
                        alignItems:'center',
                        justifyContent:'space-around'
                                                

                    }}>
                    <FaFacebookF style={{color:'whitesmoke', fontSize:'1.2rem' , cursor:'pointer'}}/>
                    <FaTwitter   style={{color:'whitesmoke', fontSize:'1.2rem' , cursor:'pointer'}}/>
                    <FaLinkedin  style={{color:'whitesmoke', fontSize:'1.2rem' , cursor:'pointer'}}/>
                    </div>
                </div>            
        </div>
    )
}

export default Footer
