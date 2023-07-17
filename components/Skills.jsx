import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';


export default function Skills() {

    const skills = [
        {
            "img": "bootstrap.svg",
            "name": "Bootstrap"
        },
        {
            "img": "c.svg",
            "name": "C"
        },
        {
            "img": "css.svg",
            "name": "CSS"
        },
        {
            "img": "docker.svg",
            "name": "Docker"
        },
        {
            "img": "git-icon.svg",
            "name": "Git VCS"
        },
        {
            "img": "github.svg",
            "name": "Github"
        },
        {
            "img": "html.svg",
            "name": "HTML"
        },
        {
            "img": "javascript.svg",
            "name": "Javascript"
        },
        {
            "img": "mongodb.svg",
            "name": "MongoDB"
        },
        {
            "img": "mysql-logo.svg",
            "name": "MySQL"
        },
        {
            "img": "netlify.svg",
            "name": "Netlify"
        },

        {
            "img": "nodejs.svg",
            "name": "NodeJS"
        },
        {
            "img": "php.svg",
            "name": "PHP"
        },
        {
            "img": "python.svg",
            "name": "Python"
        },
        {
            "img": "react.svg",
            "name": "ReactJs"
        },
        {
            "img": "redux.svg",
            "name": "Redux"
        }];

    const skillsSection = skills.map(skill => {
        return (
            <div key={skill.img} className="skill-cont">
                <img src={`/assets/${skill.img}`} className="skills-icon" id={skill.name == "NodeJS" ? "node-icon" : ""} />
                <h4>{skill.name}</h4>
            </div>
        )
    })

    return (
        <section className="skills-section" id="skills">
            <h1 className="centered-text"><FontAwesomeIcon icon={faCode} /><span className="purple-colored"> Skills</span></h1>
            {/* <span><FontAwesomeIcon icon={faCode} /><h1>Skills</h1></span> */}
            <div className="skill-container">
                {skillsSection}
            </div>
        </section>
    )
}