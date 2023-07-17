import React from "react";
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons';
import TiltComponent from "./TiltComponent";

export default function AboutMe() {

    const aboutMePoints = ['<span class="colored">MERN stack developer</span> based in Pune', '<span class="colored">Sophomore</span> at Vishwakarma College of Arts, Commerce and Science', 'Love to <span class="colored">code</span> and build stuff', '<span class="colored">Blockchain and Web 3.0</span> enthusiast', '<span class="colored">Socials</span>'];

    const aboutMe = aboutMePoints.map(point => {
        return (
            <li key={point} className="about-points" dangerouslySetInnerHTML={{ __html: point }}></li>
        )
    })

    const socials = [
        { "icon": faLinkedin, "link": "https://www.linkedin.com/in/mohammedtaherali/" },
        { "icon": faGithub, "link": "https://github.com/mohammed-taherali/" },
        { "icon": faInstagram, "link": "https://www.instagram.com/mohammed_cement/" },
        { "icon": faMedium, "link": "https://medium.com/@Mohammed_Taherali" }]

    const socialsLink = socials.map(social => {
        return (
            <a key={social.link} href={social.link} target="_blank" className="a-link">
                <div className="socials-holder">
                    <FontAwesomeIcon icon={social.icon} size="lg" className="fontawesome-icon" />
                </div>
            </a>
        )
    })

    return (
        <section className="main-section" id="about">
            <div className="col1">
                <h1>Hi There, <br />I am Mohammed <span className="colored">Taherali</span></h1>
                <h3 className="into-part">
                    I am into <span className="colored"><Typed
                        strings={["Web Development", 'Frontend Development', 'Backend Development']}
                        typeSpeed={40}
                        backSpeed={40}
                        loop
                    /></span>
                </h3>
                <ul>
                    {aboutMe}
                </ul>
                <div id="socials">
                    {socialsLink}
                </div>
            </div>
            <div className="col2">
                <TiltComponent />
            </div>
        </section>
    )
}