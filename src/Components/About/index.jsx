import React from 'react'
import "./index.css";

const About = () => {
  return (
    <div className='about_section'>
        <div className="about_section_title">
        <div className="about_layout_heading">
            <h2>Everyday tasks are a breeze with on-demand services.</h2>
        </div>
        <div className="about_layout_subtitle">
            <p>When life gets busy, you don’t have to tackle it alone. Get time back for what you love without breaking the bank.</p>
        </div>
        </div>
        <div className="about_content_container">
          <div className="about_content_left">
            <img src="./ahj/about_1.png" alt="about_img" loading='lazy'/>
          </div>
          <div className="about_content_right">
            <div className="about_content_head">
              <h2>On-demand service <span>designed for you</span></h2>
            </div><br />
            <p>Get the best home services whenever you need them, 
designed just for you. Whether it's repairs, cleaning, or
maintenance, our experts are on call, 24/7. Enjoy fast, 
reliable service with a personal touch, right at your 
doorstep.</p>
          </div>
        </div>
        <div className="about_content_container flex-wrap">
          <div className="about_content_left">
            <img src="./ahj/about_2.png" alt="about_img" loading='lazy'/>
          </div>
          <div className="about_content_right">
            <div className="about_content_head">
              <h2><span>Schedule when it works for you</span> - as early as today</h2>
            </div><br />
            <p>Book home services at your convenience, even for today. From repairs to maintenance, our professionals are available when you need them. Enjoy fast, reliable, and personalized service right at your doorstep.</p>
          </div>
        </div>
        <div className="about_content_container">
          <div className="about_content_left">
            <img src="./ahj/about_3.png" alt="about_img" loading='lazy'/>
          </div>
          <div className="about_content_right">
            <div className="about_content_head">
              <h2><span>By Your Side Through Every</span><> Turn and Twist!</></h2>
            </div><br />
            <p>We’re by your side through every twist and turn! From last-minute repairs to routine maintenance, our skilled professionals are always ready to assist. With flexible, on-demand services, we’re here to provide fast and reliable help whenever life happens.</p>
          </div>
        </div>
    </div>
  )
}

export default About