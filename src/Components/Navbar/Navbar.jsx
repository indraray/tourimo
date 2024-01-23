import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='Navbar_div'>
      <div className="title_name">
        <p>tourimo</p>
      </div>
      <div className="nav_links">
        <ul>
        <li ><Link  to="/" > Home</Link></li>
        <li ><Link  to="/travel" >Book Tour</Link></li>
        <li ><Link  to="/blogs" > Blogs</Link></li>
        <li ><Link  to="/gallery" > Gallery</Link></li>
        <li ><Link  to="/aboutus" > About Us</Link></li>
        <li ><Link  to="/contactus" > Contact Us</Link></li>
        </ul>
      </div>
      <div className="nav_media">
        <Link  to="/postblog"> <span className="material-symbols-outlined">send</span></Link>
        <Link  to="/login"> <span className="material-symbols-outlined">login</span></Link>
        
      </div>
    </div>
  )
}
