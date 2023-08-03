import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faUser,
  faEnvelope,
  faPhone,
  faCommentDots,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function GetInTouch() {
  function handleInputClick(id, userId) {
    const elem = document.getElementById(id);
    elem.style.border = "2px solid dodgerblue";
    elem.style.boxShadow = "0 0 4px dodgerblue";
    document.getElementById(userId).style.color = "dodgerblue";
  }

  function handleInputBlur(id, userId) {
    const elem = document.getElementById(id);
    elem.style.border = "1px solid black";
    elem.style.boxShadow = "none";
    document.getElementById(userId).style.color = "black";
  }

  function submitForm(e) {
    e.preventDefault();
  }

  return (
    <section id="contact" className="contact-section">
      <h1 className="centered-text" style={{ marginBottom: "0.5em" }}>
        <FontAwesomeIcon icon={faComments} style={{ color: "white" }} />
        <span className="yellow-colored"> Get In Touch</span>
      </h1>
      <div className="contact-cont">
        <div className="contact-img-cont">
          <img src="/getInTouchImg3.png" className="contact-img" />
        </div>
        <div className="ncf1">
          <form action="submitForm">
            <div className="form-group input-cont" id="userNameCont">
              <FontAwesomeIcon icon={faUser} id="userNameIcon" />
              <input
                className="form-control custom-input"
                title="Name"
                name="username"
                id="username"
                placeholder="Name"
                autoComplete="off"
                onClick={() => handleInputClick("userNameCont", "userNameIcon")}
                onBlur={() => handleInputBlur("userNameCont", "userNameIcon")}
              />
            </div>
            <div className="form-group input-cont" id="emailCont">
              <FontAwesomeIcon icon={faEnvelope} id="emailIcon" />
              <input
                className="form-control custom-input"
                title="Email Address"
                name="email"
                id="email"
                placeholder="Email"
                autoComplete="off"
                onClick={() => handleInputClick("emailCont", "emailIcon")}
                onBlur={() => handleInputBlur("emailCont", "emailIcon")}
              />
            </div>
            <div className="form-group input-cont" id="phoneCont">
              <FontAwesomeIcon icon={faPhone} id="phoneIcon" />
              <input
                className="form-control custom-input"
                title="Phone no"
                name="phone"
                id="phone"
                placeholder="Phone"
                autoComplete="off"
                onClick={() => handleInputClick("phoneCont", "phoneIcon")}
                onBlur={() => handleInputBlur("phoneCont", "phoneIcon")}
              />
            </div>
            <div className="form-group input-cont" id="msgCont">
              <FontAwesomeIcon
                icon={faCommentDots}
                id="msgIcon"
                style={{ alignSelf: "start", marginTop: "8px" }}
              />
              <textarea
                className="form-control custom-input"
                title="Message"
                name="message"
                id="message"
                placeholder="Message"
                autoComplete="off"
                onClick={() => handleInputClick("msgCont", "msgIcon")}
                onBlur={() => handleInputBlur("msgCont", "msgIcon")}
                rows={5}
              ></textarea>
            </div>
            <div className="btn-cont">
              <button className="btn submit-btn">
                Submit <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </form>
        </div>
        {/* <form className="contact-form">
          <div class="input-container">
            <div style={{ height: "80px" }}>
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
            <input
              class="input-field"
              type="text"
              placeholder="Username"
              name="usrnm"
            />
          </div>

          <div class="input-container">
            <div style={{ height: "100%" }}>
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
            <input
              class="input-field"
              type="text"
              placeholder="Email"
              name="email"
            />
          </div>

          <div class="input-container">
            <div style={{ height: "100%" }}>
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
            <input
              class="input-field"
              type="password"
              placeholder="Password"
              name="psw"
            />
          </div>

          <button type="submit" class="btn">
            Register
          </button>
        </form> */}
        {/* <div className="contact-form-cont">
          <div className="try-cont" id="nid1">
            <FontAwesomeIcon icon={faUser} />
            <input placeholder="Name" className="i-t1" onClick={func1} />
          </div>

          <form className="form-group">
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="text"
              name="username"
              className="form-control"
              autoComplete="off"
              placeholder="Name"
            />
            <div className="input-cont">
              <input
                type="text"
                name="username"
                placeholder="Name"
                className="contact-form-input"
              />
            </div>
          </form>
        </div> */}
      </div>
    </section>
  );
}
