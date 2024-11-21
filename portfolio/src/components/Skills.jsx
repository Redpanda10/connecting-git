import './Skills.css';

export default function Skills() {
    const skillCategories = {
        "Frontend": ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
        "Backend": ["Node.js", "Python", "RESTful APIs"],
        "Database": ["MongoDB", "Firebase", "SQL"],
        "Tools & Others": ["Git", "VS Code", "Agile/Scrum", "Problem Solving"]
    };

    return (
        <section className="skills-section" id="skills">
            <div className="skills-container">
                <h1 className="skills-title">Technical Skills</h1>
                <p className="skills-subtitle">Specialized in full-stack development with expertise in:</p>
                
                <div className="skills-grid">
                    {Object.entries(skillCategories).map(([category, skills]) => (
                        <div key={category} className="skill-category">
                            <h2>{category}</h2>
                            <div className="skills-list">
                                {skills.map((skill) => (
                                    <div key={skill} className="skill-item">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}