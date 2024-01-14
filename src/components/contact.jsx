import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone  } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Contact() {
  return (
    <div id="contact_id">
      <h1
        style={{
          color: "Yellow",
          marginLeft: "41%",
          marginTop: 300,
          marginBottom: 150,
        }}
      >
        Connect with me {"  "} 
        <a href="https://www.linkedin.com/in/priyanshu-biswas-aa133028a/">
        <FontAwesomeIcon icon={faLinkedin}   color="white" padding="300px"/>
        </a>
      </h1>

      <div className="contact">
        <div style={{textAlign:"center"}}>
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
        <p>priyanshu21@iitk.ac.in</p>
        </div>
        <div style={{textAlign:"center"}}>
        <FontAwesomeIcon icon={faPhone} size="2x" />
        <p>9289584389</p>
        </div>
        

      </div>
    </div>
  );
}

export default Contact;
