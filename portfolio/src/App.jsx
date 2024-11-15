import { useState } from 'react';
import './App.css'
import {Typewriter} from 'react-simple-typewriter';
import Mohit from './assets/mohit singh budal.jpg';
import ProjectCard from "./components/Projectcard.jsx";

const initialProjects = [
  {
    title: 'To-do List',
    description: 'This is the first project of mine that I created with the a lot of effort and this is the begininig of the projects.',
    githubLink: 'https://github.com/redpanda10',
  },
  {
    title: 'To-do List',
    description: 'This is the first project of mine that I created with the a lot of effort and this is the begininig of the projects.',
    githubLink: 'https://github.com/redpanda10',
  },
  {
    title: 'To-do List',
    description: 'This is the first project of mine that I created with the a lot of effort and this is the begininig of the projects.',
    githubLink: 'https://github.com/redpanda10',
  },
  {
    title: 'To-do List',
    description: 'This is the first project of mine that I created with the a lot of effort and this is the begininig of the projects.',
    githubLink: 'https://github.com/redpanda10',
  },
  {
    title: 'To-do List',
    description: 'This is the first project of mine that I created with the a lot of effort and this is the begininig of the projects.',
    githubLink: 'https://github.com/redpanda10',
  },
  {
    title: 'To-do List',
    description: 'This is the first project of mine that I created with the a lot of effort and this is the begininig of the projects.',
    githubLink: 'https://github.com/redpanda10',
  },
];

export default function App(){

  const [showMore, setShowMore] = useState(false);

  const projectsToShow = showMore ? initialProjects : initialProjects.slice(0, 3);

  const Contact = () => {
    alert('Contact Form Submitted')
  }
  return<>
   <div className="App">
      <h1>My Projects</h1>
      <div className="project-list">
        {projectsToShow.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      {!showMore && (
        <button className="view-more" onClick={() => setShowMore(true)}>
          &#x2192; View More Projects
        </button>
      )}
    </div>
    <div className="main">
      <div className="navigation">
      <a href="">About</a>
      <a href="">Skills</a>
      <a href="">Projects</a>
      <a href="">Resume</a>
      <a href="">Contact me</a>    
      </div>

      <div className="main">
        <h1>Welcome to My Portfolio</h1>
        <p>I am a software engineer, passionate about technology and creativity.</p>
        <button id="contactme" onClick={Contact}>Get in Touch</button>
      </div>

      <div className="about">
        <div className='intro'>
        <Typewriter
            words={['Hi', 'I am a software engineer']}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </div>
        <div className='intro'><img src={Mohit} alt='Profile' className='mohit-image'/></div>
      </div>
      
      
      <div className="skills">
        <h1>Skills</h1>
        <p>I have experience with the following technologies:</p>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>MongoDB</li>
          <li>Firebase</li>
        </ul>
      </div>
      <div className="projects">
        <h1 id="h1">Projects</h1>
        <p id='project'>Some of my recent projects include:</p>
        <div className='project-card' onClick='www.google.com'>
          <header>To-do application</header>
          <body>
            This is the web application that I built using React and Node.js. It is a simple to-do list application that allows users to do their task in the contain time frame.
          </body>
          <footer>
          Click To get Source code
          </footer>
        </div>
      </div>



      <div className="resume">click here to see resume !!!</div>
      <div className="contact">
        <h1 id='h1'>Contact Me</h1>
        <h1>Email : {' '} </h1>
        <input id='input-email' type="email" placeholder='email' />
        
        <br/>
        <h1>Mobile No : </h1>
        <input id='input-mobileno' type="tel" placeholder='Mobile no'/>
        <br />
        <h1>Message : </h1>
        <textarea id='input-text' type="text" placeholder='message'/>
        <br />
        <button id='sub-btn'>Submit</button>
      </div>
      <div className="footer">
        https://localhost:5173 <br />
        Designed and Developed By: Mohit Singh Budal | Email: budalmohitsingh@gmail.com <br />
        &copy; Copyright 2023 Mohit Singh Budal - 2081, All Rights Reserved
      </div>
  </div>
  </>
}