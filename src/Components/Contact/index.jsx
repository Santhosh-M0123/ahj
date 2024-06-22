import React from 'react'
import "./index.css";

const Contact = () => {
    const openDialer = (phoneNumber) => {
        window.location.href = `tel:${phoneNumber}`;
    };
  return (
    <div className='contact_section'>
        <div className="contact_section_left">
            <span>
            Got questions or project ideas? We're here to help!<br/> Contact us for a free quote.
            </span>
        </div>
        <div className="contact_section_right">
            <div className="contact_now_btn">
                <button onClick={() => openDialer("+971 50 569 1966")}>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default Contact