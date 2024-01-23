import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>
        Welcome to our tourism website! We are passionate about providing
        exceptional travel experiences for our customers.
      </p>

      <h3>Our Mission</h3>
      <p>
        Our mission is to showcase the beauty of destinations and create
        unforgettable memories for travelers.
      </p>

      <h3>Why Choose Us?</h3>
      <ul>
        <li>Expertly crafted itineraries</li>
        <li>Local guides with extensive knowledge</li>
        <li>Unique and off-the-beaten-path experiences</li>
        <li>Customer satisfaction is our priority</li>
      </ul>

      <h3>Meet the Team</h3>
      <div className="team-members">
        {/* Display information about team members */}
        <div className="team-member">
          <img src="team-member1.jpg" alt="Team Member 1" />
          <p>John Doe</p>
          <p>Founder & CEO</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
  );
};

export default AboutUs
