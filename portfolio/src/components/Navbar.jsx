import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation();
    
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="navigation">
            <ul className="navbaritem">
                <li id="navbaritem">
                    <Link id="navbaritem-a" to="/" onClick={() => scrollToSection('about')}>About</Link>
                </li>
                <li id="navbaritem">
                    <Link id="navbaritem-a" to="/" onClick={() => scrollToSection('skills')}>Skills</Link>
                </li>
                <li id="navbaritem">
                    <Link id="navbaritem-a" to="/" onClick={() => scrollToSection('projects')}>Projects</Link>
                </li>
                <li id="navbaritem">
                    <Link id="navbaritem-a" to="/resume">Resume</Link>
                </li>
                <li id="navbaritem">
                    <Link id="navbaritem-a" to="/" onClick={() => scrollToSection('contact')}>Contact me</Link>
                </li>
            </ul>
        </div>
    );
}