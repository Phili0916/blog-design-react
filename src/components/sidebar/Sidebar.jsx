import React from 'react'
import "./sidebar.css"
import aboutMePhoto from '../../images/about-me-photo.jpg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>
                About Me
            </span>
            <img 
                className='sidebarImage'
                src={aboutMePhoto} 
                alt='About me'
            />
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, aliquam placeat.
                Consequatur odio animi dolores ab laboriosam iusto nostrum! 
            </p>
        </div>
        <div className='sidebarItem'>
          <span className='sidebarTitle'>Categories</span>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>Life</li>
            <li className='sidebarListItem'>Sports</li>
            <li className='sidebarListItem'>Coding</li>
            <li className='sidebarListItem'>Parenting</li>
          </ul>
        </div>
        <div className='sidebarItem'>
          <span className='sidebarTitle'>Follow Us</span>
          <div className='sidebarSocialIcons'>
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
