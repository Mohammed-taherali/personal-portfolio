import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCircleChevronRight, faHeart, faPhone, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function MyFooter() {
    return (
        <section className="footer">

            <div className="box-container">

                <div className="box">
                    <h3>Mohammed's Portfolio</h3>
                    <p className="footer-about">Thank you for visiting my personal portfolio website. <br /><br />Connect with me over socials. <br /> <br /> Keep grinding, Keep shining! 🚀</p>
                </div>

                <div className="box">
                    <h3 className="sl">Quick Links</h3>
                    <a href="#about"><FontAwesomeIcon icon={faCircleChevronRight} /> home</a>
                    <a href="#about"><FontAwesomeIcon icon={faCircleChevronRight} /> about</a>
                    <a href="#skills"><FontAwesomeIcon icon={faCircleChevronRight} /> skills</a>
                    <a href="#projects"><FontAwesomeIcon icon={faCircleChevronRight} /> Projects</a>
                    <a href="#education"><FontAwesomeIcon icon={faCircleChevronRight} /> education</a>
                </div>

                <div className="box">
                    <h3>Contact Info</h3>
                    <p><FontAwesomeIcon icon={faPhone} style={{ color: "#ffae00" }} /> +91 XXX-XXX-XXXX</p>
                    <p className="emailAdd"><FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffae00" }} /> col.mohammedtaher@gmail.com</p>
                    <p> <FontAwesomeIcon icon={faMapLocationDot} style={{ color: "#ffae00" }} /> Pune, India-411048</p>
                    <div className="share">

                        <a href="https://www.linkedin.com/in/mohammedtaherali/" className="fab fa-linkedin" aria-label="LinkedIn" target="_blank"><FontAwesomeIcon icon={faLinkedin} /> </a>
                        <a href="https://github.com/mohammed-taherali/" className="fab fa-github" aria-label="GitHub" target="_blank"><FontAwesomeIcon icon={faGithub} /> </a>
                        <a href="mailto:col.mohammedtaher@gmail.com" className="fas fa-envelope" aria-label="Mail" target="_blank"><FontAwesomeIcon icon={faEnvelope} /> </a>
                        <a href="https://www.instagram.com/mohammed_cement/" aria-label="Instagram" target="_blank"><FontAwesomeIcon icon={faInstagram} /> </a>
                        <a href="https://medium.com/@Mohammed_Taherali" aria-label="Medium" target="_blank"><FontAwesomeIcon icon={faMedium} /> </a>
                    </div>
                </div>
            </div>

            <h1 className="credit">Designed with <FontAwesomeIcon icon={faHeart} beat style={{ color: "#e90606" }} /> by <a href="https://www.linkedin.com/in/mohammedtaherali/"> Mohammed Taherali</a></h1>

        </section>
    )
}