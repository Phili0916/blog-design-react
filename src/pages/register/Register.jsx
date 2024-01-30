import React from 'react'
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
            <button className='registerButton'>Login</button>
        </form>
        <button className='registerLoginButton'>Register</button>
    </div>
    )
}

export default Register