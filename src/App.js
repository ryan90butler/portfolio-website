import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
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
import email from './Assets/email.png';
import redux from './Assets/redux.svg';
import CodeBar from './Components/CodeBar/CodeBar.js';
import MyPark from './Components/MyPark/MyPark.js';

class App extends Component {
  constructor(){
    super()
    this.state={
      name: '',
      email: '',
      message: ''
    }
    this.submitEmail = this.submitEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitEmail(e) {
    e.preventDefault();
    axios.post('/api/contact', {name:this.state.name, email: this.state.email, message:this.state.email})
      .then(response => {
        console.log(response)
        this.setState({name: '', email: '', message:''})
    })
    .catch(error=>{
      console.warn(error)
    })
}

  handleChange(e){
    this.setState({
        [e.target.name]: e.target.value,
    });
  }

  render() {
    const isEnabled =
    this.state.email.length > 0 &&
    this.state.message.length > 0 &&
    this.state.name.length > 0
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
      <div className='About'>
      <a name="about">
      <br/>
      <br/>
      <h3>About</h3>
      <div className='About-container'>
      <img height='300' width='300' alt='portfolio' src={me}/>
      <p>I love programming, solving problems, and building. I'm a self-motivated software developer with a strong work ethic, and attention to detail. I'm adept in learning new concepts, ideas, and frameworks with a strong desire to build amazing applications.</p>
      </div>
      </a>
      </div>
      <div className='Skills'>
      <a name="skills">
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
      </a>
      </div>
      <a name="portfolio">
      <div className='Portfolio'>
      <br/>
      <br/>
      <h3>Portfolio</h3>
      <div className='portfolio-container'>
      <div className='myPark'>
      <MyPark/>
        <span>React, Redux, SASS, Node.js, Express, REST, PostgreSQL</span>
          <p> MyPark helps vacation goers find and collect information for their favorite national parks. MyPark collects park information with the National Park Service API, coupled with the Google distance API to present the data. Users can save their desired parks for future use, leave comments on any park, and find campground information.
          </p>
          <a href='https://mypark-db.herokuapp.com/' target="_blank"><button>Visit MyPark</button></a>
          <a href='https://github.com/ryan90butler/mypark' target="_blank"><button>GitHub Repo</button></a>
      </div>
      <div className='codeBar'>
      <CodeBar/>
      <span>React, Redux, Sass, Node.js, Express, REST, MongoDB</span>
        <p> Code Bar is an assessment administration tool for educators, mentors, potential employers, and anyone else looking to test JavaScript competencies. Code Bar was created as a seamless option to distribute assessments to students without managing a student portal or tracker. Instructors can send students a link to an assessment and students can use it to take their assessment, while receiving a detailed report of the students code and logic.
        </p>
        <a href='http://www.devcodebar.com' target="_blank"><button>Visit Code Bar</button></a>
        <a href='https://github.com/DEMPA15/assessment-proj' target="_blank"><button>GitHub Repo</button></a>
      </div>
      </div>
      </div>
      </a>
      <div className='Connect'>
      <a name="connect">
      <br/>
      <br/>
      <h3>Connect</h3>
      <form className="contactForm">
      <label for="name">Name &#42;</label>
      <input name="name" value={this.state.name} onChange={this.handleChange}/>
      <label for="email">Email &#42;</label>
      <input name="email" value={this.state.email} onChange={this.handleChange}/>
      <label for="message">Message &#42;</label>
      <textarea cols="30" rows="10" name="message" value={this.state.message} onChange={this.handleChange}/>
      <button disabled={!isEnabled} onClick={this.submitEmail}>Submit</button>
      </form>
      <div className='connect-buttons'>
      <a href='https://www.linkedin.com/in/rlbutler1/' target="_blank"><img alt='linkedin' height='75'src={linkedin}/></a>
      <a href='mailto:ryan90butler@gmail.com'><img alt='email' height='65' src={email}/></a>
      <a href='https://github.com/ryan90butler' target="_blank"><img alt='github' height='65' src={githubsmall}/></a>
      </div>
      </a>
      </div>
      </div>
    );
  }
}

export default App;