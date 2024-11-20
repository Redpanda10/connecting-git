import './Projectcard.css'; 


const ProjectCard = () => {
  const project = [
    {
      title: 'To-do List',
      description: 'This is the first project of mine that I created with the a lot of effort and this is the begininig of the projects.',
      githubLink: 'https://github.com/redpanda10',
    },
    {
      title: 'To-do List',
      description: 'This is the first project of mine that I created with the a lot of effort and this is the begininig of the projects.',
      githubLink: 'https://github.com/redpanda10',
    },
    {
      title: 'To-do List',
      description: 'This is the first project of mine that I created with the a lot of effort and this is the begininig of the projects.',
      githubLink: 'https://github.com/redpanda10',
    },
    {
      title: 'To-do List',
      description: 'This is the first project of mine that I created with the a lot of effort and this is the begininig of the projects.',
      githubLink: 'https://github.com/redpanda10',
    },
    {
      title: 'To-do List',
      description: 'This is the first project of mine that I created with the a lot of effort and this is the begininig of the projects.',
      githubLink: 'https://github.com/redpanda10',
    },
    {
      title: 'To-do List',
      description: 'This is the first project of mine that I created with the a lot of effort and this is the begininig of the projects.',
      githubLink: 'https://github.com/redpanda10',
    },
  ];

  return (
    <div className="projects">
        <h1 id="h1">{project.title}</h1>
        <p id='project'>Some of my recent projects include:</p>
        <div className='project-card' onClick='www.google.com'>
          <header>To-do application</header>
          <body>
            This is the web application that I built using React and Node.js. It is a simple to-do list application that allows users to do their task in the contain time frame.
          </body>
          <footer onClick={()=>{project.githubLink}}>
          Click To get Source code
          </footer>
        </div>
      </div>
  );
};

export default ProjectCard;