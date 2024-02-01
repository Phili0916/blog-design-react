import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <div className='login'>
        <span className='loginTitle'>Login</span>
        <form className='loginForm'>
            <label>Email</label>
            <input 
                className='loginInput' 
                type="email" 
                placeholder='Enter Email Address'
            />
            <label>Password</label>
            <input 
                className='loginInput' 
                type="password" 
                placeholder='Enter Password'
            />
            <button className='loginButton'>Login</button>
        </form>
        <button className='loginRegisterButton'>
          <Link 
            to='/register'
            style={{textDecoration:"none", color:"inherit"}}  
          >
            Register
          </Link>
        </button>
    </div>
  )
}

export default Login