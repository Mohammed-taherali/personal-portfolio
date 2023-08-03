import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faArrowUpRightFromSquare,
  faFolderClosed,
  faFolderOpen,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

export default function Projects2() {
  const [codeId, setCodeId] = useState("");
  const [viewId, setViewId] = useState("");

  const handleMouseEnter = (id, btn) => {
    if (btn == "v") {
      setViewId(id);
    } else {
      setCodeId(id);
    }
  };

  const handleMouseLeave = (btn) => {
    if (btn == "v") {
      setViewId("");
    } else {
      setCodeId("");
    }
  };

  function truncate(str) {
    return str.length > 60 ? str.substring(0, 57) + "..." : str;
  }

  function changeView(id) {
    document.getElementById(id).style.display =
      document.getElementById(id).style.display == "none" ? "block" : "none";
  }

  function handleClose(id) {
    document.getElementById(id).style.display = "none";
  }

  const projectData = [
    {
      id: 1,
      title: "Portfolio Website",
      img: "/assets/portfolio-preview.png",
      desc: "Personal Portfolio website built using ReactJS and Bootstrap",
      code: "https://github.com/Mohammed-taherali/personal-portfolio",
      view: "https://mohammedtaherali.netlify.app/",
    },
    {
      id: 2,
      title: "Tenzies App",
      img: "/assets/tenzies-app-preview.png",
      desc: "Tenzies App built using ReactJS and JQuery",
      code: "https://github.com/Mohammed-taherali/tenzies",
      view: "https://mtc-tenzies-app.netlify.app/",
    },
    {
      id: 3,
      title: "Todo App",
      img: "/assets/todo-app-preview.png",
      desc: "Interactive todo app built to keep track of the task you have to do. Built using ReactJS",
      code: "https://github.com/Mohammed-taherali/todo-app",
      view: "https://mtc-todo-app.netlify.app/",
    },
    {
      id: 4,
      title: "Travel Journal",
      img: "/assets/travel-journal-preview.png",
      desc: "Static webpage built to showcase re-usability in ReactJS",
      code: "https://github.com/Mohammed-taherali/travel-journal",
      view: "https://mtc-travel-journal.netlify.app/",
    },
    {
      id: 5,
      title: "Shop Manager",
      img: "/assets/shop-manager-preview.png",
      desc: "Shop mangament app built using Python's Flask library and SQLite",
      code: "https://github.com/Mohammed-taherali/final_project",
      view: "https://youtu.be/ODrZb81mmT8",
    },
    {
      id: 6,
      title: "Web Scraping",
      img: "/assets/web-scraping-preview.png",
      desc: "Web scraping project made using Python's BeautifulSoup library",
      code: "https://github.com/Mohammed-taherali/football_player_info",
      view: "https://github.com/Mohammed-taherali/football_player_info",
    },
  ];

  const projectDiv = projectData.map((project) => {
    return (
      <div
        key={project.img}
        className="project"
        style={{ backgroundImage: `url(${project.img})` }}
      >
        <div
          className="proj-details"
          onMouseLeave={() => handleClose(project.id)}
        >
          <div className="proj-title">
            <h5 className="p-t">{project.title}</h5>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="arrow-icon"
              onClick={() => changeView(project.id)}
            />
          </div>
          <div className="desc" id={project.id} style={{ display: "none" }}>
            <p title={project.desc}>{truncate(project.desc)}</p>
            <div className="anchor-btns">
              <a target="_blank" href={project.view}>
                <button
                  className="btn btn-primary"
                  id={project.view}
                  onMouseEnter={() => handleMouseEnter(project.view, "v")}
                  onMouseLeave={() => handleMouseLeave("v")}
                >
                  View{" "}
                  <FontAwesomeIcon
                    icon={project.view == viewId ? faEye : faEyeSlash}
                    style={{ width: "1.5em" }}
                  />
                </button>
              </a>
              <a target="_blank" href={project.code}>
                <button
                  className="btn btn-success green-colored"
                  id={project.code}
                  onMouseEnter={() => handleMouseEnter(project.code, "c")}
                  onMouseLeave={() => handleMouseLeave("c")}
                >
                  Code{" "}
                  <FontAwesomeIcon
                    icon={
                      project.code == codeId ? faFolderOpen : faFolderClosed
                    }
                    style={{ width: "1.5em" }}
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id="projects" className="projects-section">
      <h1 className="centered-text">
        <FontAwesomeIcon icon={faLaptopCode} style={{ marginRight: "10px" }} />
        <span className="colored">Projects</span>
      </h1>
      <div className="projects-container">{projectDiv}</div>
    </section>
  );
}
