import React from 'react'
import "./index.css";
import { ServicesList } from '../../common/serviceList';

const Services = () => {
  return (
    <div className='services_container'>
        <div className="services_container_head">
            <div className="services_title">
                <h2>Our Services</h2>
            </div>
            <div className="services_subtitle">
                <p>When life gets busy, you don't have to tackle it alone. Get time back for what you<br /> love without breaking the bank.</p>
            </div>
        </div>
        <div className="service_container_list">
            <div className="service_cards">
                {ServicesList.map((item,index) => (
                    <div className={index % 2 ? "service_card_layers pt" : "service_card_layers"}>
                    <ServiceCard values={item}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

const ServiceCard = ({values}) => {
    return <div className='service_card'>
        <div className="service_card_header">
            <img src={values.path} alt="website_service_images" loading='lazy'/>
        </div>
        <div className="service_card_body">
            <div className="service_title">
                <b>{values.service}</b>
            </div>
            <div className="service_des">
                <span>{values.description}</span>
            </div>
        </div>
    </div>
}

export default Services