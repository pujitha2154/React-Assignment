import React from 'react'
import './section.css';
const Section = () => {
    return (
        <>
        <div className="container">
            <div className="new-feature">
                <span>New feature</span>
                <a href="#" className="feature-link">
                    Check out the team dashboard →
                </a>
            </div>
            <h1>Beautiful analytics to grow smarter</h1>
            <p className="description">
                Powerful, self-serve product and growth analytics to help you convert,engage, and retain <br />more users. Trusted by over 4,000 startups.
            </p>
            <div className="buttons">
                <button className="btn demo-btn"><img src="src/assets/videoicon.png" alt="videoicon" className='video-icon' />Demo</button>
                <button className="btn signup-btn">Sign up</button>
            </div>
        </div>
        <div className='section'>
            <img src="src/assets/testmyskills.png" alt="testmyskills" className='testmyskills' />
        </div>
        </>
    )
}

export default Section;