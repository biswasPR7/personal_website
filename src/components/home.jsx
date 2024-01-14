import React from "react";

import new_photo from "./cool pic.png";
import {useTypewriter} from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons";

function Home() {
  const[typeEffect]= useTypewriter({
    words: ["Priyanshu"],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 40
  })
  return (
    <div className="home">
      <div>
        <h1 style={{lineHeight:1.6}}>Hi everyone 👋 </h1>
        <div>

        <h1 style={{lineHeight:1.6}}>myself</h1>
        <h1 style={{lineHeight:1.6,color: "white"}}>{typeEffect}</h1>
        </div>
         <div style={{color:"white"}}>
          <a href="https://www.linkedin.com/in/priyanshu-biswas-aa133028a/">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
       
        {" "}
          <a href="https://github.com/biswasPR7">
        <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        </div>
        
      </div>

      <div>
        <img id="photo" src={new_photo} alt="coder" />
      </div>
      
    </div>
  );

}


export default Home;