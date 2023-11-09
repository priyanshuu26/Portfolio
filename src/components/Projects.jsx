import React from 'react';
import wordgameImg from '../assets/project/game.jpg';
import calculatorImg from '../assets/project/calcu.jpg';
import heartImg from '../assets/project/heartmedi.jpg';
import loveImg from '../assets/project/a1d6f51747be47e732a36a1cf6eefc56--game-follow-me.jpg';

function Projects() {
  return (
    <section id="project">
      <div id="stars" />
      <div className="page5">
        <div className="project-title">
          <h2>
            Showcasing My Creative <br />
            <span> Project </span>Journey
          </h2>
        </div>
        <div className="portfolio-content">
          <div className="row">
            <img src={wordgameImg} alt="" />
            <div className="layer">
              <h5>Word Guessing Game</h5>

              <p>
                A fun Python game where players guess a word by guessing
                individual letters or the whole word.
              </p>
              <a aria-label="service box" href="/#">
                <i className="bx bx-link-external" />
              </a>
            </div>
          </div>

          <div className="row">
            <img src={heartImg} alt="" />
            <div className="layer">
              <h5>Heart disease Predection </h5>

              <p>
                Machine learning model predicts heart disease risk based on
                health data.
              </p>
              <a aria-label="service box" href="/#">
                <i className="bx bx-link-external" />
              </a>
            </div>
          </div>

          <div className="row">
            <img src={loveImg} alt="" />
            <div className="layer">
              <h5>Love Percentage</h5>

              <p>
                A Python program that calculates a compatibility score between
                two individuals based on their names.
              </p>
              <a aria-label="service box" href="/#">
                <i className="bx bx-link-external" />
              </a>
            </div>
          </div>

          <div className="row">
            <img src={calculatorImg} alt="" />
            <div className="layer">
              <h5>Tip Calculator</h5>

              <p>
                A Python program that calculates the appropriate tip amount
                based on the bill total and desired tip percentage.
              </p>
              <a aria-label="service box" href="/#">
                <i className="bx bx-link-external" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
