import React from 'react'
import "./index.css";
import Highlights from '../UIReusables/Highlights';
import { ServicesList } from '../../common/serviceList';
import { Link } from 'react-scroll';

const Hero = () => {
    const [showMore,setShowMore] = React.useState(false);
    const [listN,setListN] = React.useState(3);
    // const ServicesList = ["Home Furniture", "Plumbing","Home Furniture", "Plumbing","Home Furniture", "Plumbing"];
    console.log(ServicesList.slice(0,3))
  return (
    <div className='hero_container'>
        <div className="container_left">
            <div className="highlight_area">
                <Highlights />
            </div>
            <div className="hero_heading">
                <h1>On-demand home services are just 24 hours away!</h1>
            </div>
            <div className="hero_subquote">
                <p>Enjoy quick, reliable solutions when you need them most with our on-demand services.</p>
            </div>
            <div className="hero_service_search">
                <div className="search_icon">
                    <img src="./ahj/search.svg" alt="search_icon" />
                </div>
                <div className="search_input">
                    <input type="text" placeholder='I need services with....' />
                </div>
                <div className="book_now">
                    <span>Book Now</span>
                </div>
            </div>
            <div className="services_list_item">
                {ServicesList.slice(0,listN).map((i,index) => (<SearchList key={index} content = {i}/>))}
                {!showMore ? <span onClick={() => {
                    setShowMore(prev => !prev)
                    setListN(ServicesList.length)
                    }} style={{color : 'black', cursor : "pointer"}}>Show more...</span> : ""}
            </div>
        </div>
        <div className="container_right">
            <div className="hero_img">
                <img src="./ahj/home_img.png" alt="Hero_image" />
            </div>
        </div>
    </div>
  )
}

const SearchList = ({content}) => {
    return <span className='search_list'><Link to='services' activeClass="active" duration={500} spy={true} smooth={true} >{content.service}</Link></span>
}

export default Hero