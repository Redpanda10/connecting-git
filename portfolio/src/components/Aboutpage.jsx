import "./Aboutpage.css"
export default function Aboutpage(){
    const Contact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
    return<>
        <div className="short-bio" id="about">
            <div className="top">
                <h1 id='welcome'>Welcome to My
                <div style={
                {fontSize:100,
                color:'#6B8E23',}
                } >Portfolio</div>
                </h1>
            </div>
            
        <div className="bottom">
                <h1>I am a software engineer, passionate about technology and creativity.</h1>
                <button className="contact-btn" onClick={Contact}>Get In Touch</button>
        </div>
      </div>
    </>
}