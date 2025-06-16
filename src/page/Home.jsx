import React from 'react'
import HeroSection from "../components/HeroSection/HeroSection.jsx"
import ServicesSection from "../components/ServicesSection/ServicesSection.jsx"
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs.jsx"
import ProjectsSection from "../components/ProjectsSection/ProjectsSection.jsx"
import CTASection from "../components/CTASection/CTASection.jsx"
import ContactSection from "../components/ContactSection/ContactSection.jsx"
import Header from '../components/Header/Header.jsx'

const Home = () => {
  return (
    <div>
      <Header/>
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <ProjectsSection />
        <CTASection />
        <ContactSection />
      </main>
    </div>
  )
}

export default Home
