import React , {useRef} from 'react'
import Facebook from '../../assets/Facebook.svg'
import google from '../../assets/google.svg'
import './Auth.css'
import FormInput from './FormInput'

const Login = () => {
  return (
    <div className='login-page' >
        <h1 className='page-title' >Gapplebees</h1>
        <div className='login-container'>
            <h2 className='form-title' >Login</h2>
            <form className='auth-form'>
                
                <FormInput label={'User name'} type={'text'} />
                <FormInput label={'Email'} type={'email'}/>
                <FormInput label={'Password'} type={'password'} />
                
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