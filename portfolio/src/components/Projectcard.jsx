import './Projectcard.css'; 

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;