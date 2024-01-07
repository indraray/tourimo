import React from 'react'
import './Heading.css'

export default function Heading(props) {
  return (
    <>
    <div className="agency_heading">
          <p className='agency_name'>{props.name}</p>
          <p className='agency_details'>{props.first_name} <br /> {props.second_name}</p>
      </div>

    </>
  )
}
