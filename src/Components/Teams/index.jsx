import React from 'react'
import "./index.css";

const Teams = () => {
  return (
    <div className='teams_container'>
        <div className="teams_container_left">
            <div className="img_overlayer">
            <img src="./ahj/teams.png" alt="teams_image" />
            </div>
        </div>
        <div className="teams_container_right">
            <div className="teams_main_head">
                <h2>Expert help, always at your beck and call</h2>
            </div>
            <div className="teams_mail_subtitle">
                <p>Conquer life's to-dos with your local, vetted by our team. They've got you covered, for anything!</p>
            </div>
            <div className="usp_teams">
                <div className="usp">
                    <img src="./ahj/check.png" alt="check" />
                    <span>Compare Reviews and Prices for Home Services.</span>
                </div>
                <div className="usp">
                <img src="./ahj/check.png" alt="check" />
                    <span>Choose and connect with the best person for the job</span>
                </div>
                <div className="usp">
                <img src="./ahj/check.png" alt="check" />
                    <span>Save your favorites to book again and again</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Teams