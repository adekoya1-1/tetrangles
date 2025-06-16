import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Project from './page/Project';
import PropertyListing from './page/PropertyListing';

import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/property-listing" element={<PropertyListing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
