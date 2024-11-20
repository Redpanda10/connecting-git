import "./Aboutpage.css"
export default function Aboutpage(){
    const Contact = () => {
        alert('Contact Form Submitted')}
    return<>
        <div className="short-bio">
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
                <p id="contact" onClick={Contact}>Contact Me</p>
        </div>
      </div>
    </>
}