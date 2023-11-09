import React from 'react';

function Services() {
  return (
    <section id="service">
      <div id="stars" />
      <div className="page4">
        <div className="services">
          <div className="titles">
            <h2>
              <span>My </span>Services <br />
              <span className="service-title">what I do</span>
            </h2>
          </div>

          <div className="servicebox">
            <div className="card">
              <i className="bx bxs-pen" />
              <h5>Graphic Design</h5>
              <div className="pra">
                <p>
                  I make designs at the client's request, banner designs, and
                  digital-poster designs among others.
                </p>
                <br />

                <p style={{ textAlign: 'center' }}>
                  <a
                    href="https://webflow.com/blog/what-is-graphic-design"
                    className="button"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Read more
                  </a>
                </p>
              </div>
            </div>
            <div className="card">
              <i className="bx bx-window-alt" />
              <h5>Web development</h5>
              <div className="pra">
                <p>
                  Development of custom web pages. Using current technologies
                  and libr/aries of the labor field.
                </p>
                <br />
                <p style={{ textAlign: 'center' }}>
                  <a
                    href="https://en.wikipedia.org/wiki/Web_development#:~:text=Web%20development%20is%20the%20work,businesses%2C%20and%20social%20network%20services."
                    rel="noopener noreferrer"
                    className="button"
                    target="_blank"
                  >
                    Read more
                  </a>
                </p>
              </div>
            </div>
            <div className="card">
              <i className="bx bxl-firebase" />
              <h5>UI/UX Design</h5>
              <div className="pra">
                <p>
                  I offer design of web interfaces and mobile applications,
                  designs made in Figma and Adobe xd.
                </p>
                <br />
                <p style={{ textAlign: 'center' }}>
                  <a
                    href="https://www.freecodecamp.org/news/ui-ux-design-guide/"
                    rel="noopener noreferrer"
                    className="button"
                    target="_blank"
                  >
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
