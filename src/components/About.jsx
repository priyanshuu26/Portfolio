import React from 'react';
import Lottie from 'react-lottie';
import AboutLotiie from '../assets/Lottie/flyingman.json';

function About() {
  return (
    <section id="about">
      <div id="stars" />
      <div className="page2">
        <div className="about-section">
          <div className="abt-cnt">
            <div className="about-content-box">
              <Lottie
                options={{ animationData: AboutLotiie }}
                height="80%"
                width="80%"
                style={{
                  margin: '0 0',
                }}
              />
            </div>

            <div className="about-txt">
              <h2>
                <span>About</span> Me
              </h2>
              <h5>
                I am enthusiastic and passionate about <span>Front-end</span>{' '}
                and <span> Python development.</span>
              </h5>
              <p>
                I am constantly expanding my skill set and keeping up with the
                latest industry trends to deliver high-quality solutions. I
                believe in writing clean, efficient, and maintainable code, and
                I am familiar with version control systems like Git, ensuring
                smooth collaboration within development.
                <br /> <br />
                When I'm not coding, you can find me exploring new technologies,
                reading tech blogs, or participating in coding communities. I am
                always excited to take on new projects and contribute to the
                ever-evolving world of technology. <br />
                <br />
                <i>"Don't watch the clock; do what it does. Keep going."</i>
                <br /> <span>-Priyanshu</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
