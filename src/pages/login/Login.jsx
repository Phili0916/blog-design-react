import React from 'react'
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
        <button className='loginRegisterButton'>Register</button>
    </div>
  )
}

export default Login