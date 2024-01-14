import React from "react";
import Nav from "./components/Nav";
import About from "./components/about";
import Home from "./components/home"
import Education from "./components/education"
import Projects from "./components/projects"
import Contact from "./components/contact"
function App() {
  

  return (
    <div>
      <Nav />
      <div className="main"></div>
      <Home/>
      <About/>
      
      <Projects/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;
