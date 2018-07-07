import React, { Component } from 'react';
import './App.css';
import react from './Assets/react.svg';
import js from './Assets/JS.png';
import css from './Assets/CSS.png';
import express from './Assets/express.png';
import github from './Assets/github.png';
import heroku from './Assets/heroku.png';
import html from './Assets/html.png';
import mongo from './Assets/mongo.jpg';
import mocha from './Assets/mocha.png';
import node from './Assets/node.png';
import sass from './Assets/sass.png';
import postgres from './Assets/postgres.png';
import me from './Assets/me.jpeg';
import githubsmall from './Assets/github1.png';
import linkedin from './Assets/linkedin.png';

class App extends Component {
  render() {
    return (
      <div className='App'>
      <div className='intro'>
        <h2 className='intro-header'>Ryan Butler</h2>
        <h3>Software Developer</h3>
        </div>
      <div className='topnav'>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#connect">Connect</a>
      </div>
      <a name="about">
      <div className='About'>
      <br/>
      <br/>
      <div className='About-container'>
      <p>I love programming, solving problems, and building. I'm a self-motived software developer with a strong work ethic, and attention to detail. I'm adept in learning new concepts, ideas, and frameworks with a desire to work in a fast-paced company to build amazing applications.</p>
      <img height='250' width='250' src={me}/>
      </div>
      </div>
      </a>
      <a name="skills">
      <div className='Skills'>
      <br/>
      <br/>
      <h3>Skills</h3>
      <div className="top-skills">
      <img title="Javascript"alt="js" src={js}/>
      <img alt="js" src={react}/>
      <img alt="js" src={css}/>
      <img alt="js" src={html}/>
      <img alt="js" src={node}/>
      </div>
      <div className="middle-skills">
      <img alt="js" src={express}/>
      <img alt="js" src={github}/>
      <img alt="js" src={heroku}/>
      <img alt="js" src={postgres}/>
      </div>
      <div className="bottom-skills">
      <img alt="js" src={mongo}/>
      <img alt="js" src={mocha}/>
      <img alt="js" src={sass}/>
      </div>
      </div>
      </a>
      <a name="portfolio">
      <div className ='Portfolio'>
      Portfolio
      </div>
      </a>
      <a name="connect">
      <div className='Connect'>
      Connect
      <div className='connect-buttons'>
      <a href='www.linkedin.com/in/rlbutler1/' target="_blank" ><img height='100'src={linkedin}/></a>
      <a href='https://github.com/ryan90butler'target="_blank"><img height='100' src={githubsmall}/></a>
      </div>
      </div>
      </a>
      </div>
    );
  }
}

export default App;
