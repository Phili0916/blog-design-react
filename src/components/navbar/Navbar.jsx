import React from 'react'
import './navbar.css'
import profilePicture from '../../images/prof_image.jpg'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='navLeft'>
            <i className="navIcon fa-brands fa-square-facebook"></i>
            <i className="navIcon fa-brands fa-square-instagram"></i>
            <i className="navIcon fa-brands fa-linkedin"></i>
        </div>
        <div className='navCenter'>
          <ul className="navList">
            <li className="navListItem">Home</li>
            <li className="navListItem">About</li>
            <li className="navListItem">Contact</li>
            <li className="navListItem">Write</li>
            <li className="navListItem">Logout</li>
          </ul>
        </div>
        <div className='navRight'>
          <img className="navImage" src={profilePicture} alt="profile"/>
          <i className=" navSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Navbar
