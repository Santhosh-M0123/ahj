import React from 'react'
import "./index.css";

const Testimonials = () => {
    const Feedback = [{
        user : "John",
        userid : "@John",
        feedback : "Beautiful new ceiling, fast and professional. Highly recommend!"
    },{
        user : "santhosh",
        userid : "@Santhosh",
        feedback : "Leaky faucet fixed in a flash!  These guys saved the day (and my carpet)."
    },{
        user : "Pradeep",
        userid : "@Pradeep",
        feedback : "Cracked wall? Gone! My living room looks brand new again."
    },{
        user : "Badrinath",
        userid : "@badrinath",
        feedback : "From flickering lights to perfect brightness, A+ service!"
    },{
        user : "santhosh",
        userid : "@Santhosh",
        feedback : "Cracked wall? Gone! My living room looks brand new again."
    }]
  return (
    <div className='testimonials_container'>
        <div className="testimonial_heading">
            <span>Our customers are living with a <br/><h2>smile on their faces!</h2></span>
        </div>
        <div className="client_feedback">
            <div className="card_container">
                {Feedback.map((i,index) => (
                    <Card key={index} content = {i}/>
                ))}
            </div>
        </div>
    </div>
  )
}

const Card = ({content}) => {
    return <div className='card'>
        <div className="card_header">
            <div className="card_profile">
                <div className="profile_img">
                    <img src="./ahj/about.png" alt="Profile_image" loading='lazy'/>
                </div>
                <div className="profile_name">
                    <p>{content.user}</p>
                    <span>{content.userid}</span>
                </div>
            </div>
            <div className="social_icon">
                <img src="./ahj/instagram.svg" alt="instagram" loading='lazy'/>
            </div>
        </div>
        <div className="card_body">
            <p>{content.feedback}</p>
        </div>
    </div>
}

export default Testimonials