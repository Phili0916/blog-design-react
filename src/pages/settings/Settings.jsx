import React from 'react'
import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

const Settings = () => {
  return (
    <div className='settings'>
        <div className='settingsContainer'>
            <div className='settingsTitle'>
                <span className='settingsUpdateTitle'>Update your Account</span>
                <span className='settingsDeleteTitle'>Delete your Account</span>
            </div>
            <form className='settingsForm'>
                <label>Profile Picture</label>
                <div className='settingsProfilePicture'>
                    <img 
                        src="https://images.unsplash.com/photo-1662023854608-c9673403244f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvaXJlJTIwdmFsbGV5JTIwRnJhbmNlfGVufDB8fDB8fHww"
                        alt="weather cock"
                        className='settingsImage'
                    />
                    <label htmlFor='fileInput'>
                        <i className="settingsProfilePictureIcon fa-solid fa-user"></i>
                    </label>
                    <input 
                        type="file" 
                        id="fileInput" 
                        style={{ display: "none" }}
                    />
                </div>
                <label>Update Name</label>
                <input type="text" placeholder='Name' />
                <label>Email Update</label>
                <input type="email" placeholder='Your email'/>
                <label>Password Update</label>
                <input type="password" />
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <Sidebar />    
    </div>
  )
}

export default Settings
