import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './register.css'
import axios from 'axios'

const Register = () => {
    
    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
    })

    const [err, setError] = useState(null)

    const navigate = useNavigate()

    const handleChange = (event) => {
        setInputs(prev=>({...prev, [event.target.name]: event.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await axios.post("/auth/register", inputs)
            navigate("/login")
        } catch(err) {
            setError(err.response.data)
        }
    }

    console.log(inputs, 'inputs from register')

  return (
    <div className='register'>
        <span className='registerTitle'>Register</span>
        <form className='registerForm'>
            <label>Username</label>
            <input 
                className='registerInput' 
                type="text"
                name='username' 
                placeholder='Enter your Username'
                onChange={handleChange}
            />
            <label>Email</label>
            <input 
                className='registerInput' 
                type="email"
                name='email' 
                placeholder='Enter Email Address'
                onChange={handleChange}
            />
            <label>Password</label>
            <input 
                className='registerInput' 
                type="password" 
                name="password"
                placeholder='Enter Password'
                onChange={handleChange}
            />
            <button className='registerButton' onClick={handleSubmit}>
                Register
            </button>
            {err && <p className='registerErrorMessage'>{err}</p>}
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