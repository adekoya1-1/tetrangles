import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Project from './page/Project';
import ProjectDetail from './page/ProjectDetail';
import Footer from './components/Footer/Footer';
import PropertyListing from './page/PropertyListing';
import PropertyDetail from './page/PropertyDetail';

import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/property-listing" element={<PropertyListing />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
        </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
