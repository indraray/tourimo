import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='Navbar_div'>
      <div className="title_name">
        <p>tourimo</p>
      </div>
      <div className="nav_links">
        <ul>
          <li>HOME</li>
          <li>TRAVEL</li>
          <li>GALLERY</li>
          <li>ABOUT US</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="nav_media">
        <span className="material-symbols-outlined">send</span>
        <span className="material-symbols-outlined">login</span>
      </div>
    </div>
  )
}
