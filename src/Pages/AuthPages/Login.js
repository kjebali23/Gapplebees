import React, { useState } from 'react'
import Facebook from '../../assets/Facebook.svg'
import google from '../../assets/google.svg'
import './Auth.css'
import FormInput from './FormInput'
import {gql , useLazyQuery , useQuery} from '@apollo/client'
import { useNavigate } from "react-router-dom";



const login = gql`
    query Login($userName: String!, $password: String!) {
        login(UserName: $userName, Password: $password) {
            Uid
            UserName
            Email
            Token
  }
}
`





const Login = () => {

    let [errors , setErrors] = useState({})
    const [values , setValues] = useState({
        username:"",
        email:"",
        password:"",
    });

    let navigate = useNavigate();

    const inputs = [
        {
            id: 1,
            name:"username",
            type:"text",
            placeholder:"Username",
            label:"Username"
        },
        // {
        //     id: 2,
        //     name:"email",
        //     type:"email",
        //     placeholder:"Email",
        //     label:"Email"
        // },
        {
            id: 2,
            name:"password",
            type:"password",
            placeholder:"Password",
            label:"Password"
        }
    ]
    const userName = values.username
    const  password = values.password


    const [loginUser, { loading, data , error }] = useLazyQuery(login , {
        variables:{
            userName,
            password
        }
    });
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>An error occured</p>;
    if (data) {
        sessionStorage.setItem('JWT' , data.login.Token )
      navigate('/race')
    //   return(<BrowserRouter to="/" />)
    }




    const onChange=(e)=>{
        setValues({...values , [e.target.name]: e.target.value})
    }




    const onSubmit = (e)=>{
        e.preventDefault();
        loginUser(userName, password)

    }

  


  return (
    <div className='login-page'>
        
        <h1 className='page-title' >Gapplebees</h1>
        <div className='login-container'>
            <h2 className="form-title">Login</h2>

            <form 
            // onClick={ onSubmit}
            // onSubmit={ onSubmit }
            className='auth-form'>
            {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
                
                

                <button onClick={ onSubmit} className='auth-form-btn' >Login</button>
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
            <a className='redirect-link' href="http://localhost:3000/sign-up">Don't have an account?</a>
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

export default Login