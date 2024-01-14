import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap,faUser,faCode,faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Nav() {
  return (
    <header>
      <nav>
        <div className="left">Priyanshu's Portfolio</div>
        <div className="right">
          <ul className="navItems">
            <li>
              <Link to="about_id" smooth={true}>
              <FontAwesomeIcon icon={faUser} />
               <div>About</div> 
              </Link>
            </li>

           
            <li>
            <Link to="projects_id" smooth={true}>
            <FontAwesomeIcon icon={faCode} />
              <div>Projects</div>
              </Link>
            </li>
            <li>
              {" "}
              <Link to="edu_id" smooth={true}>
                {" "}
                <FontAwesomeIcon icon={faGraduationCap} />
                <div>Education</div>
              </Link>
            </li>
            <li>
            <Link to="contact_id" smooth={true}>
            <FontAwesomeIcon icon={faEnvelope } />
             <div>Contact me</div> 
             </Link>
              </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
