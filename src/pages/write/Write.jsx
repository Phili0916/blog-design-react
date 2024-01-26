import React from 'react'
import './write.css'

const Write = () => {
  return (
    <div className='write'>
        <img 
            src="https://images.unsplash.com/photo-1680729969800-1ffd48b9ebc4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGFuZ2VycyUyMGZyYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="house on the Maine"
            className="writeImage"
        />
        <form className='writeForm'>
            <div className='writeFormContainer'>
                <label htmlFor='fileInput'>
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input 
                    type="file" 
                    id="fileInput" 
                    className='fileAdd' 
                />
                <input 
                    type="text" 
                    placeholder='Title' 
                    className='writeInput' 
                    autoFocus={true} 
                />
            </div>
            <div className='writeFormContainer'>
                <textarea 
                    placeholder='Write your Story' 
                    type="text" 
                    className="writeInput writeText"
                >

                </textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}

export default Write
