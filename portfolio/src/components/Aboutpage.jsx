import "./Aboutpage.css"
export default function Aboutpage(){
    const Contact = () => {
        alert('Contact Form Submitted')}
    return<>
        <div className="short-bio">
        <h1 id='welcome'>Welcome to My<div style={
        {fontSize:100,
        color:'#6B8E23',}
        } >Portfolio</div></h1>
        <p>I am a software engineer, passionate about technology and creativity.</p>
        <button id="contactme" onClick={Contact}>Get in Touch</button>
      </div>
    </>
}