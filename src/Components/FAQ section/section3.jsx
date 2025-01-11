import React from 'react'
import './section3.css';
const Section3 = () => {
  return (
    <div className="contact-section">
    <div className="contact-content">
      <div className="avatars">
        <img src="src/assets/image1.png" alt="Avatar 1" className='Alec' />
        <img src="src/assets/image2.png" alt="Avatar 2" className='Olivia' />
        <img src="src/assets/image3.png" alt="Avatar 3" className='Lori' />
      </div>
      <h2>Still have questions?</h2>
      <p>Can't find the answer you’re looking for? Please chat with our friendly team.</p>
      <button className="contact-button">Get in touch</button>
    </div>
  </div>
  )
}

export default Section3;