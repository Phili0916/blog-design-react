import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

const Register = () => {
  return (
    <div className='register'>
        <span className='registerTitle'>Register</span>
        <form className='registerForm'>
            <label>Username</label>
            <input 
                className='registerInput' 
                type="email" 
                placeholder='Enter your Username'
            />
            <label>Email</label>
            <input 
                className='registerInput' 
                type="email" 
                placeholder='Enter Email Address'
            />
            <label>Password</label>
            <input 
                className='registerInput' 
                type="password" 
                placeholder='Enter Password'
            />
            <button className='registerButton'>
                Register
            </button>
        </form>
        <button className='registerLoginButton'>
            <Link 
                to='/login'
                style={{textDecoration:"none", color:"inherit"}}    
            >
                Login
            </Link>
        </button>
    </div>
    )
}

export default Register