import React from 'react'
import Components from '../Components';

const {TopNav,Hero,About,Teams,Testimonials,Services,Contact,Footer} = Components;

const Main = () => {
  return (
    <div className="home_main_layout">
        <div className="top_nav_layout">
            <TopNav />
        </div>
        <div className="hero_section_layout" id='home'>
            <Hero />
        </div>
        <div className="about_section_layout" id='about'>
            <About />
        </div>
        {/* <div className="teams_section_layout" id='teams'>
          <Teams />
        </div> */}
        <div className="testimonials_section_layout" id='services'>
          <Services />
        </div>
        <div className="teams_section_layout" id='teams'>
          <Teams />
        </div>
        <div className="contact_section_layout" id='contact'>
          <Contact />
        </div>
        <div className="testimonials_section_layout" id='testimonials'>
          <Testimonials />
        </div>
        <div className="footer_section_layout" id='footer'>
          <Footer />
        </div>
    </div>
  )
}

export default Main