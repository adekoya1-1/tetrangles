import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '💡',
      title: 'Innovative Solutions',
      description: 'We\'re revolutionizing construction. Our approach reduces waste, saves time, and ensures superior quality. Build your next project the future-proof way.',
      stats: '17+',
      statsText: 'Projects Completed'
    },
    {
      icon: '🏆',
      title: 'Quality Craftsmanship',
      description: 'Our team of skilled professionals takes pride in their work, ensuring every detail receives the utmost attention and precision. We use only the highest-quality materials.',
      stats: '13+',
      statsText: 'Projects Completed'
    },
    {
      icon: '🎯',
      title: 'Expertise And Experience',
      description: 'We leverage our team\'s deep expertise and proven experience to ensure every step of the process is seamless and successful.',
      stats: '29+',
      statsText: 'Projects Completed'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="why-choose-us-content">
        <span className="section-subtitle">Why Choose Us?</span>
        <h2 className="section-title">Why we're your best choice</h2>
        <p className="section-description">
          We have a wide range of equipment and machinery, including Reinforced Concrete Equipment, and Light weight Machinery
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-stats">
                <span className="stats-number">{feature.stats}</span>
                <span className="stats-text">{feature.statsText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
