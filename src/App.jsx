import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MyNav from "../components/MyNav";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";

export default function App() {
  return (
    <main>
      <MyNav />
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
    </main>
  )
}
