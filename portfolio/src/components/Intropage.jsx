import {Typewriter} from 'react-simple-typewriter';
import Mohit from '../assets/mohit singh budal.jpg';
import './Intropage.css'


export default function Intropage(){
    return <>
         <div className="about">
          <span className='intro-text' style={{ color: 'red', fontWeight: 'bold' }}>
          <Typewriter 
            words={[
              'Hi there! 👋', 
              'I am Mohit Singh Budal',
              'I am a Developer 💻',
              'I love coding ❤️',
              'Welcome to my portfolio!'
            ]}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
            
          />
          </span>
          <div className='intro-image'>
            <img src={Mohit} alt='Profile' className='mohit-image'/>
          </div>
        </div>
    </>
}