import React from 'react';

function Skills() {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <section id="skill">
      <div id="stars" />
      <div className="page2">
        <div className="skillset" onClick={handleClick} aria-hidden="true">
          <h1>
            Professional <span>Skillset</span>
          </h1>
          <div className="skillcontent">
            <a href="/#">
              <i className="bx bxl-html5 bx-tada" />
              <h3>HTML</h3>
            </a>
            <a href="/#">
              <i className="bx bxl-css3 bx-tada" />
              <h3>CSS</h3>
            </a>
            <a href="/#">
              <i className="bx bxl-javascript bx-tada" />
              <h3>JavaScript</h3>
            </a>
            <a href="/#">
              <i className="bx bxl-nodejs bx-tada" />
              <h3>Nodejs</h3>
            </a>
            <a href="/#">
              <i className="bx bxl-python bx-tada" />
              <h3>Python</h3>
            </a>
            <a href="/#">
              <i className="bx bxl-github bx-tada" />
              <h3>Github</h3>
            </a>
            <a href="/#">
              <i className="bx bxl-mongodb bx-tada" />
              <h3>MongoDb</h3>
            </a>
            <a href="/#">
              <i className="bx bxl-c-plus-plus bx-tada" />
              <h3>C++</h3>
            </a>
            <a href="/#">
              <i className="bx bxs-category-alt bx-tada" />
              <h3>Numbpy</h3>
            </a>
            <a href="/#">
              <i className="bx bxl-react bx-tada" />
              <h3>React</h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
