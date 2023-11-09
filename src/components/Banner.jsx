/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import HomeLottie from '../assets/Lottie/sittingLottie.json';

function Banner() {
  return (
    <>
      <section id="main">
        <div id="stars" />
        <div className="page1">
          <div className="main-content">
            <div className="icon">
              <div className="icon fonts">
                <a href="https://github.com/" rel="noopener">
                  <i className="bx bxl-github " style={{ color: '#ffffff' }} />
                </a>
                <a href="/#">
                  <i className="bx bxl-gmail " />
                </a>
                <a
                  href="https://www.linkedin.com/in/priyanshu-buley-16467727b/"
                  rel="noopener"
                >
                  <i className="bx bxl-linkedin " />
                </a>
              </div>
            </div>
            <div className="name">
              <h2>
                Hi There! <span className="waving-hand">👋🏻</span>
              </h2>
              <h1>
                I'M <span>PRIYANSHU BULE</span>
              </h1>
              <div className="box">
                <ul>
                  <li>
                    <span data-text="Frontend developer">
                      Frontend Developer
                    </span>
                  </li>
                </ul>
              </div>
              <br />
              <h3>
                A focused Web Developer building the Frontend of Websites and
                Web Applications that leads to the success of the overall
                product
              </h3>
              <br />
              <div className="button">
                <a className="btn" href="#contact">
                  <Link to="/contact"> Lets' talk</Link>
                </a>
                <a className="btn ">
                  <Link to="/resume">Resume</Link>
                </a>
              </div>
            </div>

            <div className="lottie">
              <Lottie
                options={{ animationData: HomeLottie }}
                height="100%"
                width="100%"
                className="z-12 hidden md:block"
                style={{ margin: '-66px 0 0' }}
              />
            </div>
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Services />
    </>
  );
}

export default Banner;
