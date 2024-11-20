// import { useState } from 'react';
import './App.css'
import {Typewriter} from 'react-simple-typewriter';
import Mohit from './assets/mohit singh budal.jpg';
import Projectcard from "./components/Projectcard.jsx";
import Aboutpage from './components/Aboutpage.jsx';
import Navbar from './components/Navbar.jsx';

export default function App(){

  // const [showMore, setShowMore] = useState(false);

  
  
 
  return<><div className="main">
      
      <Navbar/>
      <Aboutpage/>

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
      
      <div>{Projectcard}</div>


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