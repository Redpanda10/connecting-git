import './Projectcard.css'; 


const ProjectCard = () => {
  const projects = [
    {
      title: 'To-do List Application',
      description: 'A full-stack task management application built with React and Node.js. Features include task creation, completion tracking, and data persistence.',
      githubLink: 'https://github.com/redpanda10/todo-app',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing my projects and skills. Built with React and modern CSS features.',
      githubLink: 'https://github.com/redpanda10/portfolio',
      tech: ['React', 'CSS3', 'Vite']
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application that displays current weather and forecasts using OpenWeather API.',
      githubLink: 'https://github.com/redpanda10/weather-app',
      tech: ['JavaScript', 'REST API', 'Bootstrap']
    }
  ];

  return (
    <div className="projects" id="projects">
      <h1 id="h1">My Projects</h1>
      <p id='project'>Some of my recent projects include:</p>
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className='project-card'>
            <header>{project.title}</header>
            <div className="project-content">
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <footer>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                View Source Code
              </a>
            </footer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;