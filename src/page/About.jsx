import React from 'react';
import './About.css';
import Header from '../components/Header/Header';
import AHeroSection from '../components/AboutComponenet/AHeroSection';
import ACompany from '../components/AboutComponenet/ACompany';
import Bridge from '../components/AboutComponenet/Bridge';
import Quote from '../components/AboutComponenet/Quote';

const About = () => {
  return (
    <div>
    <Header/>
    <AHeroSection/>
    <ACompany/>
    <Bridge/>
    <Quote/>
    </div>
  );
};

export default About;
