import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './login.css'
import { AuthContext } from '../../context/authContext'

const Login = () => {

  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  })
  
  const [err, setError] = useState(null)
  
  const navigate = useNavigate()

  const {login} = useContext(AuthContext)

  
  const handleChange = (event) => {
    setInputs(prev=>({...prev, [event.target.name]: event.target.value}))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        await login(inputs)
        navigate("/")
    } catch(err) {
        setError(err.response.data)
    }
  }
  
  console.log(inputs, 'inputs from login')
  
    return (
      <div className='login'>
          <span className='loginTitle'>Login</span>
          <form className='loginForm'>
              <label>Username</label>
              <input 
                  className='loginInput' 
                  type="text" 
                  name="username"
                  placeholder='Enter Username'
                  onChange={handleChange}
              />
              <label>Password</label>
              <input 
                  className='loginInput' 
                  type="password" 
                  name="password"
                  placeholder='Enter Password'
                  onChange={handleChange}
              />
              <button className='loginButton' onClick={handleSubmit}>
                Login
              </button>
              {/* {err && <p className='loginErrorMessage'>{err}</p>} */}
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