import React, { useState } from 'react'
import Facebook from '../../assets/Facebook.svg'
import google from '../../assets/google.svg'
import './Auth.css'
import FormInput from './FormInput'
import {gql , useMutation} from '@apollo/client'
import { useNavigate } from "react-router-dom";




const signUp = gql`
    mutation signUp($UserName : String , $Email: String , $Password : String) {
  createNewUser(UserName : $UserName , Email: $Email , Password: $Password ) {
    Email
    Password
    UserName
    Token
  }
}
`





const SignUp = () => {

    let [errors , setErrors] = useState({})
    const [values , setValues] = useState({
        username:"",
        email:"",
        password:"",
    });

    const navigate = useNavigate()

    const inputs = [
        {
            id: 1,
            name:"username",
            type:"text",
            placeholder:"Username",
            label:"Username"
        },
        {
            id: 2,
            name:"email",
            type:"email",
            placeholder:"Email",
            label:"Email"
        },
        {
            id: 3,
            name:"password",
            type:"password",
            placeholder:"Password",
            label:"Password"
        }
    ]




    const onChange=(e)=>{
        setValues({...values , [e.target.name]: e.target.value})
    }

    const [createUser] = useMutation(signUp ,{
        update(proxy , result){
            sessionStorage.setItem('JWT' , result.data.createNewUser.Token)
            navigate('/race')

        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.errors)
        }
    });

    const onSubmit = (e)=>{
        e.preventDefault();
        createUser( {variables: {UserName: values.username , Email: values.email , Password: values.password}} )

    }  


  return (
    <div className='login-page'>
        
        <h1 className='page-title' >Gapplebees</h1>
        <div className='login-container'>
            <h2 className="form-title">Sign Up</h2>

            <form onSubmit={ onSubmit }
            className='auth-form'>
            {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
                
                

                <button className='auth-form-btn' >Sign-Up</button>
            <div className='alternative-method'>
                <h4>Or connect with :</h4>
                <div className='connection-methods'>
                    
                    <div className="social-container">
                        <img className='connection-prov-logo'  src={Facebook} />
                        <img className='connection-prov-logo' src={google}/>
                    </div>
                
                </div>
            </div>
            </form>
            <a className='redirect-link' href="http://localhost:3000/login">Already have an account?</a>
            {Object.keys(errors).length > 0  && 
               <div className='auth-errors'> 
                   <p>{errors.email}</p>
                   <p>{errors.usename}</p>
                   <p>{errors.password}</p>
                   
                </div>   
               }
        </div>
    </div>
  )
}

export default SignUp