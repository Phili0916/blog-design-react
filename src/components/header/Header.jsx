import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className="header">
        <div className='headerTitles'>
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img 
            className='headerImage' 
            src='https://images.unsplash.com/photo-1679040630230-d6d4bb460493?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGxvaXJlJTIwdmFsbGV5fGVufDB8fDB8fHww' 
            alt="Loire Valley"
        />
    </div>
  )
}

export default Header
