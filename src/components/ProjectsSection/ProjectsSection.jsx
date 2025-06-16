import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Project 1',
      image: '/images/2.jpg',
    },
    {
      title: 'Project 2',
      image: '/images/3.jpg',
    },
    {
      title: 'Project 3',
      image: '/images/969.jpg',
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-content">
        <span className="section-subtitle">Our Projects</span>
        <h2 className="section-title">Explore our diverse range of projects</h2>
        <p className="section-description">
          We specialize in a wide range of construction services, including residential, commercial, and industrial projects.
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <h3 className="project-title">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
