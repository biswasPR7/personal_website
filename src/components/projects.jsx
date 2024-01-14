import { React } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    //

    <div className="project" id="projects_id">
      <h1 style={{ color: "yellow" }}>Projects</h1>
      <Slider {...settings}>
        <div className="cards">
          <header style={{ color: "green" }}>Tic-Tac Toe</header>
          <main style={{ color: "orangeRed" }}>
            Made a multiplayer tic tac toe game using React. Implemented game
            logic and state management using React's useState hook, ensuring
            efficient and concise code.Created a dynamic game board rendering
            logic, allowing the board to update seamlessly with every user move.
          </main>
          <button>
            <a
              href="https://biswaspr7.github.io/tic-tac-toe/"
              style={{ color: "orangeRed", textDecoration: "none" }}
            >
              App link
            </a>{" "}
          </button>
        </div>

        <div className="cards">
          <header style={{ color: "green" }}>To Do List</header>
          <main style={{ color: "orangeRed" }}>
            {" "}
            Crafted a user-friendly To-Do List app using React that simplifies
            task management.Users can add, update, and delete tasks, and see
            changes happen instantly. This project showcases my Proficiency in
            using React's features to create a smooth and efficient experience
            for organizing tasks.
          </main>
          <button>
            <a
              href="https://biswaspr7.github.io/TodoList_new/"
              style={{ color: "orangeRed", textDecoration: "none" }}
            >
              {" "}
              App link
            </a>
          </button>
        </div>
        <div className="cards">
          <header style={{ color: "green" }}>
            Probabilistic Thinking{" "}
            <p style={{ fontSize: "15px" }}>(Stamatics, IIT Kanpur)</p>{" "}
          </header>
          <main style={{ color: "orangeRed" }}>
            Learnt about stochastic processes, Markov chains and probabilistic
            machine learning and implemented them in R . Prepared simulations in
            R based on Markov chains and stochastic processes and computed their
            probabilities . Programmed a number of Markov chain and
            probabilistic machine learning principles and implemented them in R
          </main>
        </div>
        <div className="cards">
          <header style={{ color: "green" }}>
            IPO Analysis
            <p style={{ fontSize: "15px" }}>
              (Finance and Analytics Club, IIT Kanpur)
            </p>{" "}
          </header>
          <main style={{ color: "orangeRed" }}>
            Classified forward looking statements in MDA section of draft red
            herring prospectus literature review of content . . Extracted
            company data using web scraping with BeautifulSoup to calculate
            valuation, liquidity leverage ratios . Learnt about fundamental
            ratios as P/E, debt, and current ratio and used them them to grade
            an IPO.
          </main>
        </div>
      </Slider>
    </div>
  );
}
export default Projects;
