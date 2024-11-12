import './App.css'
import Typewriter from 'react-effect-typewriter';
import Mohit from './assets/mohit singh budal.jpg'
export default function App(){
  return<>
    <div className="main">
      <div className="navigation">
      <a href="">About</a>
      <a href="">Skills</a>
      <a href="">Projects</a>
      <a href="">Resume</a>
      <a href="">Contact me</a>    
      </div>

      <div className="header-section">
        <div className='intro'>
        <Typewriter.Container>
        <Typewriter.Paragraph 
        typingSpeed={90}
        style={{color: 'black',fontSize:'50px',textAlign:'center'}}
        >
        Hello!
        </Typewriter.Paragraph>
        <Typewriter.Paragraph 
        typingSpeed={90}
        style={{color: 'black',fontSize:'50px',textAlign:'center'}}
        >
        This is Mohit Singh Budal
        </Typewriter.Paragraph>
        </Typewriter.Container>
        </div>
        <div className='intro'><img src={Mohit} className='mohit-image'/></div>
      </div>
      
      <div className="about"></div>
      <div className="skills"></div>
      <div className="projects"></div>
      <div className="resume"></div>
      <div className="contact"></div>
      <div className="footer"></div>
  </div>
  </>
}