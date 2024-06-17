import React from 'react'
import "./index.css";
import { Link, animateScroll as scroll } from 'react-scroll';

const scrollToTop = () => {
    scroll.scrollToTop();
};

const TopNav = () => {
  return (
    <>
    <div className='Nav-container'>
        <div className="logo">
            <img src="./ahj/Logo_gold.svg" alt="Logo" />
        </div>
        <div className="nav_links">
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
            {/* <div className="translation">
                <span>En</span>
            </div> */}
        </div>
    </div>
    <div className="scrollToTop" onClick={() => scrollToTop()}>
        <img src="./ahj/topicon.png" alt="top-icon" />
    </div>
    </>
  )
}

export default TopNav