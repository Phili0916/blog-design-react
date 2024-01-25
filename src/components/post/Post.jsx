import React from 'react'
import './post.css'

const Post = () => {
  return (
    <div className='post'>
        <img 
          className='postImage' 
          alt="balloon over the Loire" 
          src="https://images.unsplash.com/photo-1583756255976-cd9d7c8c71a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TG9pcmUlMjB2YWxsZXl8ZW58MHx8MHx8fDA%3D"
        />
        <div className='postInfo'>
          <div className='postCategories'>
            <span className='postCategory'>Life</span>
            <span className='postCategory'>Sports</span>
          </div>
          <span className='postTitle'>
            Lorem, ipsum dolor sit amet
          </span>
          <hr/>   
          <span className='postDate'>
            2 hours ago
          </span>
        </div>
        <p className='postDescription'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora suscipit quisquam
          provident nostrum saepe ea possimus, laudantium dolores architecto quidem, quas 
          voluptas, eveniet voluptates odit sit explicabo minima magnam praesentium.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora suscipit quisquam
          provident nostrum saepe ea possimus, laudantium dolores architecto quidem, quas 
          voluptas, eveniet voluptates odit sit explicabo minima magnam praesentium.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora suscipit quisquam
          provident nostrum saepe ea possimus, laudantium dolores architecto quidem, quas 
          voluptas, eveniet voluptates odit sit explicabo minima magnam praesentium.
        </p>
    </div>
  )
}

export default Post

