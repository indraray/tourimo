import React from 'react'
import './Blogs.css'
import Heading from '../../Components/Heading/Heading'
import BlogsTile from '../../Components/BlogsTile/BlogsTile'

const Blogs = () => {

  return (
    <div className='blogs'>
      <Heading name="Read" first_name="BLOGS" second_name="" />
      <div className="posts">
        <div className="div_display_one">        
        <BlogsTile />
        </div>
      </div>

    </div>
  )
}

export default Blogs
