import React from 'react'
import './ContactUs.css'
import Heading from '../../Components/Heading/Heading'

const ContactUs = () => {
  return (
    <div className='contactus'>
      <Heading name="tourimo" first_name="Contact Us" second_name=""/>
      <div className="contact_details">
      <div className="address-section">
        <h2>Agency Address</h2>
        <p>123 Travel Street</p>
        <p>Cityville, Country</p>
        <p>Postal Code: 12345</p>
      </div>
      <div className="guide-section">
        <h2>Tourist Guide Details</h2>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
         <div className="div">
         <input type="text"  placeholder='Name'/>
         </div>
         <div className="div">
         <input type="number" name="" id="" placeholder='Phone'/>
         </div>
         <div className="div">
         <input type="email" name="" id="" placeholder='Email'/>
         </div>
         <div className="div">
         <textarea type="email" name="" id="" placeholder='Question? Queries'/>
         </div>
         <button> Get In Touch</button>
      </div>

      
    </div>
  )
}

export default ContactUs
