import React from "react";

export default function MyNav() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-bg" id="home">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="https://mohammedtaherali.netlify.app/"
        >
          <img src="./mtc-logo.png" className="logo-img" />{" "}
          <span id="myName">Mohammed</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav push-right">
            <li className="nav-item">
              <a className="nav-link custom-font" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-font" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-font" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-font" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  custom-font" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
