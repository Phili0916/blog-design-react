import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import profilePicture from '../../images/prof_image.jpg'
import { AuthContext } from '../../context/authContext'

const Navbar = () => {

  const {currentUser, logout} = useContext(AuthContext)

  return (
    <div className='nav'>
        <div className='navLeft'>
            <i className="navIcon fa-brands fa-square-facebook"></i>
            <i className="navIcon fa-brands fa-square-instagram"></i>
            <i className="navIcon fa-brands fa-linkedin"></i>
        </div>
        <div className='navCenter'>
          <ul className="navList">
            <li className="navListItem">
              <Link 
                to="/"
                style={{textDecoration:"none", color:"inherit"}}
              >
                Home
              </Link>
            </li>
            <li className="navListItem">
            <Link 
                to="/about"
                style={{textDecoration:"none", color:"inherit"}}
              >
                About
              </Link>  
            </li>
            <li className="navListItem">
            <Link 
                to="/contact"
                style={{textDecoration:"none", color:"inherit"}}
              >
                Contact
              </Link>  
            </li>
            <li className="navListItem">
              <Link 
                  to="/write"
                  style={{textDecoration:"none", color:"inherit"}}
                >
                  Write
                </Link>  
            </li>
            <li className="navListItem">
              {currentUser ? (<span onClick={logout}>Logout</span>) : (null)}
            </li>
          </ul>
        </div>
        <div className='navRight'>
          { currentUser ? (
            <>
            <img className="navImage" src={profilePicture} alt="profile"/>
            <span className="navCurrentUser">Hello {currentUser?.username}</span>
            </>
          ) : (
            <ul className='navList'>
              <li className='navListItem'>
                <Link 
                  to="/login"
                  style={{textDecoration:"none", color:"inherit"}}
                >
                  Login
                </Link> 
              </li>
              <li className='navListItem'>
                <Link 
                  to="/register"
                  style={{textDecoration:"none", color:"inherit"}}
                >
                  Register
                </Link> 
              </li>
            </ul>
                )}

          <i className=" navSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Navbar
