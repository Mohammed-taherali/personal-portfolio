import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Education() {
  const educationDetails = [
    {
      id: 1,
      img: "vcacs.jpg",
      degree: "Bachelor's of Computer Science",
      name: "Vishwakarma College",
      board: "SPPU",
      syear: "2021",
      eyear: "2024",
      status: "Pursuing",
      marks: "",
    },
    {
      id: 2,
      img: "chokseycollege.jpeg",
      degree: "HSC | Computer Science",
      name: "S.M. Choksey Junior College",
      board: "HSC",
      syear: "2019",
      eyear: "2021",
      status: "Completed",
      marks: "93.67%",
    },
    {
      id: 3,
      img: "msbpune.jpg",
      degree: "SSC",
      name: "MSB Pune",
      board: "ICSE",
      syear: "2012",
      eyear: "2019",
      status: "Completed",
      marks: "95.5%",
    },
  ];

  const educationSection = educationDetails.map((ed) => {
    return (
      <div
        className="education"
        key={ed.id}
        style={
          ed.id == 2
            ? { flexDirection: "row-reverse" }
            : { flexDirection: "row" }
        }
      >
        <div className="edu-img-cont">
          <img
            src={`/assets/${ed.img}`}
            className="edu-img"
            style={
              ed.id == 2
                ? { borderRadius: "0 10px 10px 0" }
                : { borderRadius: "10px 0 0 10px" }
            }
          />
        </div>
        <div
          className="edu-details"
          style={ed.id == 2 ? { textAlign: "left" } : { textAlign: "end" }}
        >
          <h5 className="ed-degree">{ed.degree}</h5>
          <p className="ed-name">
            {ed.name} | {ed.board}
          </p>
          <p className="ed-stat">
            {ed.syear} - {ed.eyear} | {ed.status}{" "}
            {ed.marks ? `| ${ed.marks}` : ""}
          </p>
        </div>
      </div>
    );
  });

  return (
    <section className="education-section" id="education">
      <h1 className="centered-text">
        <FontAwesomeIcon icon={faGraduationCap} />{" "}
        <span className="purple-colored">Education</span>
      </h1>
      <div className="edu-cont">{educationSection}</div>
    </section>
  );
}
