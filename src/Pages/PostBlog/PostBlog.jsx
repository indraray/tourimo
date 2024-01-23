import React, { useState } from 'react'
import './PostBlog.css'
import Heading from '../../Components/Heading/Heading'
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

const PostBlog = () => {
   const [image, setImage] = useState('');
   const [title, setTitle] = useState('');
   const [html, setHtml] = useState('')
   const [author, setAuthor] = useState('');
   const [place, setPlace] = useState('');

   var modules = {
      toolbar: [
         [{ size: ["small", false, "large", "huge"] }],
         ["bold", "italic", "underline", "strike", "blockquote"],
         [{ list: "ordered" }, { list: "bullet" }],
         ["link"],
         [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] }
         ],
         [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
      ]
   };

   var formats = [
      "header", "height", "bold", "italic",
      "underline", "strike", "blockquote",
      "list", "color", "bullet", "indent",
      "link", "image", "align", "size",
   ];

   const handleProcedureContentChange = (content) => {
      setHtml(content)
   };


   // Submit or Upload post
   const submitFunc = async (e) => {
      e.preventDefault();
      const date = Date()
      const data = { title, author, place, date, image, html };
      const response = await fetch("http://localhost:3000/blogs", {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            'content-Type': 'application/json'
         }
      })
         .then(res => {
            setAuthor('')
            setImage('')
            setPlace('')
            setTitle('')
            console.log("sucessful")
            console.log(response)
            window.location.reload()
         })
         .catch(err => {
            console.log("error")
         })
   }

   return (
      <div className='postblog'>
         <Heading name="Write" first_name="BLOG" second_name="" />
         <div className="posts">

            <div className="add_post">
               <div className="div_input">
                  <input type="text" name="" value={title} id="" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
               </div>
               <div className="div_input">
                  <input type="url" name="" value={image} id="" placeholder='Image URL' onChange={(e) => setImage(e.target.value)} />
               </div>
               <div className="div_input">
                  <input type="text" name="" value={author} id="" placeholder='Author' onChange={(e) => setAuthor(e.target.value)} />
               </div>
               <div className="div_input">
                  <input type="text" name="" value={place} id="" placeholder='Place' onChange={(e) => setPlace(e.target.value)} />
               </div>
               <div className="div_input">
               </div>


            </div>

         </div>
         <div className='preview' dangerouslySetInnerHTML={{ __html: html }}></div>
         <div>
            <ReactQuill
               theme="snow"
               modules={modules}
               formats={formats}
               placeholder="write your content ...."
               onChange={handleProcedureContentChange}
               style={{ height: "220px", backgroundColor: "black", margin: "80px" }}
            >
            </ReactQuill>
         </div>
         <input type="button" value="Post" onClick={submitFunc} />

         <div className="Delete_div">

            <input type="button" value="Search" />
            <input type="search" name="" id="" />
            <input type="button" value="Delete" />
         </div>

      </div>
   )
}

export default PostBlog
