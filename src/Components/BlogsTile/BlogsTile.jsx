import React, { useEffect, useState } from 'react'
import './BlogsTile.css'
import axios from 'axios'
import { FcLikePlaceholder } from "react-icons/fc";


function BlogsTile() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAllData();
  }, [])

  const getAllData = () => {
    axios.get("http://localhost:3000/blogs")
      .then(res => {
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const likeFunc = () => {
    alert("Liked")
    window.location.reload()
  }
  return (
    <div>
      {posts.map(post => (
        <div className="div_post" key={post._id}>
          <img src={post.image} alt='' />
          <p className='title_blog'>{post.title}</p>
          <p className='author_blog'><span>{post.author}</span> | {post.place}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>

          <div className="engagement">
            <div className="div1"> <FcLikePlaceholder onClick={likeFunc} /></div>
            <div className="div2"><p>x {post.likes} likes</p> </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default BlogsTile

