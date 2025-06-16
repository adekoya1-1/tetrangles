import React from 'react';
import ProjectsHeroSection from '../components/ProjectsHeroSection/ProjectsHeroSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import Header from '../components/Header/Header';


const Project = () => {
  return (
    <div>
      <Header/>
      <ProjectsHeroSection />
      <ProjectsSection />
    </div>
  );
};

export default Project;
