import React from 'react'
import './viewblog.css';

const ViewBlog = () => {
  return (
    <>
     <div className="blog-section">
      <div className='blog-post'>
      <h4 className="blog-header">Our blog</h4>
      <button className="view-posts-button">View all posts</button>
      </div>
      <h1 className="blog-title">Lastest blog posts</h1>
      <p className="blog-subtitle">
        Tools and strategies modern teams need to help their companies grow.
      </p>
    </div>
    </>
  )
}

export default ViewBlog