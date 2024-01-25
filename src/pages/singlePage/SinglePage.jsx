import React from 'react'
import './single-page.css'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'

const SinglePage = () => {
  return (
    <div className="single-page">
      <SinglePost />
      <Sidebar />
    </div>
  )
}

export default SinglePage
