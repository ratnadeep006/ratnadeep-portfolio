import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Task Manager",
      description:
        "A full-stack task management application with user authentication, task creation, status tracking, and deadline management.",
      tech: ["React", "Node.js", "Express", "MySQL"],
      github: "https://github.com/ratnadeep006",
      live: "https://task-manager-frontend-one-green.vercel.app/login",
      liveAvailable: true,
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing skills, projects and experience with a clean responsive design.",
      tech: ["React", "CSS"],
      github: "https://github.com/ratnadeep006/ratnadeep-portfolio",
      live: "https://ratnadeep-portfolio.vercel.app",
      liveAvailable: true, 
    },
    {
      title: "ShopHub",
      description:
        "A responsive e-commerce frontend with modern UI, product listing, cart functionality, and reusable components. Backend powered by Node.js and Express with MySQL database.",
      tech: ["React", "Node.js", "Express", "MySQL", "CSS"],
      github: "https://github.com/ratnadeep006",
      live: null,
      liveAvailable: false,
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>
          A collection of projects showcasing my skills and experience in web
          development.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <p className="project-number">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span className="tech-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.liveAvailable ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              ) : (
                <span className="live-unavailable">Coming Soon</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
