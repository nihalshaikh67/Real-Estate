import React from 'react';
import aboutImage from'../images/hero.png'

const About = () => {
    return (
        <div className="about">
            <div className="about-model">
               <img src={aboutImage} alt=""/>
            </div>
            <div className="about-text">
             <h2>We are the best Real estate company</h2>
             <p>Real estate is all about personal connections. An About Us page is one of the tools that could take leads one step closer to contacting you. Great content, plus a lead capture form is the best way to encourage people to opt-in so make sure you enhance this lead generating ability on your website with this page.</p>
             <button>View More Details</button>
            </div>
            
        </div>
    )
}

export default About;
