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

    // Get all input fields and textarea
    const inputs = document.querySelectorAll('input, textarea');

    // Check if any field is empty
    let isAnyFieldEmpty = false;
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isAnyFieldEmpty = true;
      }
    });

    if (isAnyFieldEmpty) {
      alert('Please fill in all the fields.');
    } else {
      alert(
        'We have successfully received your message and we will soon get in touch with you!'
      );
    }
  }


  return (
    <section id="contact" className="contact-section">
      <h1 className="centered-text" style={{ marginBottom: "0.5em" }}>
        <FontAwesomeIcon icon={faComments} style={{ color: "white" }} />
        <span className="yellow-colored"> Get In Touch</span>
      </h1>
      <div className="contact-cont">
        <div className="contact-img-cont">
          <img src="/getInTouchImg.png" className="contact-img" />
        </div>
        <div className="ncf1">
          <form onSubmit={submitForm}>
            <div className="form-group input-cont" id="userNameCont">
              <FontAwesomeIcon icon={faUser} id="userNameIcon" />
              <input
                className="form-control custom-input"
                title="Name"
                name="username"
                id="username"
                placeholder="Name"
                autoComplete="off"
                onFocus={() => handleInputClick("userNameCont", "userNameIcon")}
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
                onFocus={() => handleInputClick("emailCont", "emailIcon")}
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
                onFocus={() => handleInputClick("phoneCont", "phoneIcon")}
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
                onFocus={() => handleInputClick("msgCont", "msgIcon")}
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
      </div>
    </section>
  );
}
