import React from 'react'
import "./index.css";

const Testimonials = () => {
    const Feedback = [{
        user : "Pradeep",
        userid : "@pradeep",
        feedback : "Beautiful new ceiling, fast and professional. Highly recommend!",
        image : "./ahj/client_pradeep.jpeg"
    },{
        user : "santhosh",
        userid : "@Santhosh",
        feedback : "Leaky faucet fixed in a flash!  These guys saved the day (and my carpet).",
        image : "./ahj/client_santhosh.jpeg"
    },{
        user : "Shanfar Ahammed",
        userid : "@shanfar_ahammed",
        feedback : "Cracked wall? Gone! My living room looks brand new again.",
        image : null
    },{
        user : "Badrinath",
        userid : "@badrinath",
        feedback : "From flickering lights to perfect brightness, A+ service!",
        image : "./ahj/badri_client.enc"
    },{
        user : "Unni Krishnan",
        userid : "@unni_krishnan",
        feedback : "Cracked wall? Gone! My living room looks brand new again.",
        image : undefined
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
                   {content.image ?  <img src={content.image} alt="Profile_image" loading='lazy'/> : <span>{content.user.charAt(0)}</span>}
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