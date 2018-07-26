import React, { Component } from 'react';
import './App.css';
import react from './Assets/react.svg';
import js from './Assets/JS.png';
import css from './Assets/css.svg';
import express from './Assets/express.png';
import html from './Assets/html.svg';
import api from './Assets/api.svg';
import git from './Assets/github.svg'
import mocha from './Assets/mocha.png';
import node from './Assets/node.png';
import sass from './Assets/sass.png';
import postgres from './Assets/postgres.svg';
import me from './Assets/me.jpeg';
import githubsmall from './Assets/github1.png';
import linkedin from './Assets/linkedin.png';
import codeBar from './Assets/projects/codebar.png';
import myPark from './Assets/projects/myPark.png';
import email from './Assets/email.png';
import redux from './Assets/redux.svg';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='topnav'>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#connect">Connect</a>
      </div>
      <div className='intro'>
        <h2 className='intro-header'>Ryan Butler</h2>
        <h3>Software Developer</h3>
        </div>
      <a name="about">
      <div className='About'>
      <br/>
      <br/>
      <h3>About</h3>
      <div className='About-container'>
      <img height='300' width='300' alt='portfolio' src={me}/>
      <p>I love programming, solving problems, and building. I'm a self-motivated software developer with a strong work ethic, and attention to detail. I'm adept in learning new concepts, ideas, and frameworks with a desire to work in a fast-paced company to build amazing applications.</p>
      </div>
      </div>
      </a>
      <a name="skills">
      <div className='Skills'>
      <br/>
      <br/>
      <h3>Skills</h3>
      <div className="top-skills">
      <section>
        <h4>JavaScript</h4>
        <img title="Javascript"alt="js" src={js}/>
        </section>
      <section>
        <h4>React</h4>
        <img title="Javascript"alt="js" src={react}/>
        </section>
        <section>
        <h4>Redux</h4>
        <img title="Javascript"alt="js" src={redux}/>
        </section>
      </div>
      <div className="top-skills">
        <section>
        <h4>Node.js</h4>
        <img title="Javascript"alt="js" src={node}/>
        </section>
        <section>
        <h4>Git</h4>
        <img title="Javascript"alt="js" src={git}/>
        </section>

        <section>
        <h4>Express</h4>
        <img title="Javascript"alt="js" src={express}/>
        </section>
      </div>
      <div className="top-skills">
      <section>
        <h4>PostgreSQL</h4>
        <img title="Javascript"alt="js" src={postgres}/>
        </section>
        <section>
        <h4>RESTful API</h4>
        <img title="Javascript"alt="js" src={api}/>
        </section>
        <section>
        <h4>Mocha</h4>
        <img title="Javascript"alt="js" src={mocha}/>
        </section>
      </div>
      <div className="top-skills">
        <section>
        <h4>Sass</h4>
        <img title="Javascript"alt="js" src={sass}/>
        </section>
        <section>
        <h4>CSS</h4>
        <img title="Javascript"alt="js" src={css}/>
        </section>
        <section>
        <h4>HTML</h4>
        <img title="Javascript"alt="js" src={html}/>
        </section>
      </div>
      </div>
      </a>
      <a name="portfolio">
      <div className='Portfolio'>
      <br/>
      <br/>
      <h3>Portfolio</h3>
      <div className='portfolio-container'>
      <div className='myPark'>
      <img height='350' src={myPark}/>
        <span>React, Redux, SASS, Node.js, Express, REST, PostgreSQL</span>
          <p> MyPark helps vacation goers find and collect information for their favorite national parks. MyPark collects park information with the National Park Service API, coupled with the Google distance API to present the data. Users can save their desired parks for future use, leave comments on any park, and find campground information.
          </p>
          <a href='https://mypark-db.herokuapp.com/' target="_blank"><button>Visit MyPark</button></a>
          <a href='https://github.com/ryan90butler/mypark' target="_blank"><button>GitHub Repo</button></a>
      </div>
      <div className='codeBar'>
      <img height='350' src={codeBar}/>
        <span>React, Redux, Sass, Node.js, Express, REST, MongoDB</span>
          <p> Code Bar is an assessment administration tool for educators, mentors, potential employers, and anyone else looking to test JavaScript competencies. Code Bar was created as a seamless option to distribute assessments to students without managing a student portal or tracker. Instructors can send students a link to an assessment and students can use it to take their assessment, while receiving a detailed report of the students code and logic.
          </p>
          <a href='http://www.devcodebar.com' target="_blank"><button>Visit Code Bar</button></a>
          <a href='https://github.com/DEMPA15/assessment-proj' target="_blank"><button>GitHub Repo</button></a>
      </div>
      </div>
      </div>
      </a>
      <a name="connect">
      <div className='Connect'>
      <br/>
      <br/>
      <h3>Connect</h3>
      <div className='connect-buttons'>
      <a href='https://www.linkedin.com/in/rlbutler1/' target="_blank"><img alt='linkedin' height='75'src={linkedin}/></a>
      <a href='mailto:ryan90butler@gmail.com'><img alt='email' height='65' src={email}/></a>
      <a href='https://github.com/ryan90butler' target="_blank"><img alt='github' height='65' src={githubsmall}/></a>
      </div>
      </div>
      </a>
      </div>
    );
  }
}

export default App;
