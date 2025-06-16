import React from 'react';
import './ProjectsSection.css';
import projects from '../../data/projects.json';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
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
            <Link key={index} to={`/project/${index}`} className="project-card-link">
              <div className="project-card">
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
