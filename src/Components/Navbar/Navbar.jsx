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
        <li ><Link  to="/" > HOME</Link></li>
        <li ><Link  to="/" > TRAVEL</Link></li>
        <li ><Link  to="/" > GALLERY</Link></li>
        <li ><Link  to="/" > ABOUT US</Link></li>
        <li ><Link  to="/" > CONTACT US</Link></li>
        </ul>
      </div>
      <div className="nav_media">
        <Link  to="/login"> <span className="material-symbols-outlined">send</span></Link>
        <Link  to="/login"> <span className="material-symbols-outlined">login</span></Link>
        
      </div>
    </div>
  )
}
