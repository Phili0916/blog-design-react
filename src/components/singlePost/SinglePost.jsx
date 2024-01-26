import React from 'react'
import './singlePost.css'

const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
            <img 
                className='singlePostImage'
                alt="bridge over water"
                src="https://images.unsplash.com/photo-1681659367908-909ef66ce6fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fExvaXJlJTIwdmFsbGV5fGVufDB8fDB8fHww"
            />
            <h1 className='singlePostTitle'>
                Lorem ipsum dolor sit amet.
                <div className='singlePostEdit'>
                    <i className=" singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className=" singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Philip Davis</b></span>
                <span className='singlePostDate'>2 hour ago</span>
            </div>
            <p className='singlePostDescription'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sapiente, voluptatibus 
                quam unde corrupti beatae, nemo nulla iure perferendis at ipsa veniam? Exercitationem 
                quis iste iure cum nobis omnis perferendis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sapiente, voluptatibus 
                quam unde corrupti beatae, nemo nulla iure perferendis at ipsa veniam? Exercitationem 
                quis iste iure cum nobis omnis perferendis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sapiente, voluptatibus 
                quam unde corrupti beatae, nemo nulla iure perferendis at ipsa veniam? Exercitationem 
                quis iste iure cum nobis omnis perferendis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sapiente, voluptatibus 
                quam unde corrupti beatae, nemo nulla iure perferendis at ipsa veniam? Exercitationem 
                quis iste iure cum nobis omnis perferendis.
            </p>
        </div>

    </div>
  )
}

export default SinglePost
