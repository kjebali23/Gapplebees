import React from 'react'
import Facebook from '../../assets/Facebook.svg'
import google from '../../assets/google.svg'
import './Auth.css'

const Login = () => {
  return (
    <div className='login-page' >
        <h1 className='page-title' >Gapplebees</h1>
        <div className='login-container'>
            <h2 className='form-title' >Login</h2>
            <form className='auth-form'>
                <div className='form-section-container' >
                <label>Email :</label>
                <input type='email' required/>
                </div>
                <div className='form-section-container'>
                <label>Password :</label>
                <input type='password' required/>
                </div>
                <button className='auth-form-btn' >Log-in</button>
            <div className='alternative-method' >
                <h4>Or connect with :</h4>
                <div className='connection-methods' >
                    
                    <div className="social-container" >
                        <img className='connection-prov-logo' src={Facebook} />
                        <img className='connection-prov-logo' src={google}/>
                    </div>
                
                </div>
            </div>
            </form>
            <a className='redirect-link' href="http://localhost:3000/sign-up">Don't have an account ?</a>

        </div>


    </div>
  )
}

export default Login