import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import "./index.css";

const Footer = () => {
  return (
    <div className='footer_container'>
        <div className="footer_heading">
            <h2>Life's busy. Get help instantly.</h2>
        </div>
        <div className="footer_subtitle">
            <p>Need your service done fast? Schedule a Call now and get a free Quote and Book now - <br />make it happen now!</p>
        </div>
        <div className="bottom_nav_links">
            <div className="bnl_logo">
                <img src="./ahj/Logo_white.svg" alt="logo" />
            </div>
            <div className="bnl_links">
            <div className="link">
                <Link 
                activeClass="active"
                to="home" 
                spy={true} 
                smooth={true} 
                // offset={50} 
                duration={500} 
                >Home</Link>
            </div>
            <div className="link">
            <Link 
                activeClass="active" 
                to="about" 
                spy={true} 
                smooth={true} 
                // offset={50} 
                duration={500} 
                >About</Link>
            </div>
            <div className="link">
            <Link 
                activeClass="active" 
                to="services" 
                spy={true} 
                smooth={true} 
                // offset={50} 
                duration={500} 
                >Services</Link>
            </div>
            <div className="link">
            <Link 
                activeClass="active" 
                to="testimonials" 
                spy={true} 
                smooth={true} 
                // offset={50} 
                duration={500} 
                >Testimonials</Link>
            </div>
            </div>
            <div className="bnl_social_icons">
                <div className="ico_social">
                    <img src="./ahj/twitter.svg" alt="instagram" />
                </div>
                <div className="ico_social">
                    <img src="./ahj/facebook.svg" alt="instagram" />
                </div>
                <div className="ico_social">
                    <img src="./ahj/instagram_white.svg" alt="instagram" />
                </div>
                <div className="ico_social">
                    <img src="./ahj/linkedin.svg" alt="instagram" />
                </div>
            </div>
        </div>
        <hr />
        <div className="copyright">
            <span>© Copyright 2024. All Rights Reserved</span>
        </div>
    </div>
  )
}

export default Footer