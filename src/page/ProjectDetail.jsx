import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects.json';
import FullscreenImageViewer from '../components/FullscreenImageViewer/FullscreenImageViewer';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project = projects[projectId];

  const [fullscreenImage, setFullscreenImage] = useState(null);

  if (!project) {
    return (
      <div className="project-detail">
        <h2>Project not found</h2>
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </div>
    );
  }

  const openFullscreen = (imgSrc) => {
    setFullscreenImage(imgSrc);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const nextImage = () => {
    if (!fullscreenImage) return;
    const currentIndex = project.images.indexOf(fullscreenImage);
    const nextIndex = (currentIndex + 1) % project.images.length;
    setFullscreenImage(project.images[nextIndex]);
  };

  const prevImage = () => {
    if (!fullscreenImage) return;
    const currentIndex = project.images.indexOf(fullscreenImage);
    const prevIndex = (currentIndex - 1 + project.images.length) % project.images.length;
    setFullscreenImage(project.images[prevIndex]);
  };

  return (
    <div className="project-detail">
      <Link to="/projects" className="back-link">← Back to Projects</Link>
      <h1 className="project-title">{project.title}</h1>
      <div className="project-images">
        {project.images && project.images.slice(0, 6).map((imgSrc, idx) => (
          <img
            key={idx}
            src={imgSrc}
            alt={`${project.title} image ${idx + 1}`}
            className="project-image"
            onClick={() => openFullscreen(imgSrc)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
      {/* Add more project details here if available */}
      <FullscreenImageViewer
        imageSrc={fullscreenImage}
        onClose={closeFullscreen}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
};

export default ProjectDetail;
