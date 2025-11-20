import React from 'react';
import SectionWrapper from './SectionWrapper';
import TiltCard from './TiltCard';

const About = () => {
  return (
    <SectionWrapper id="about" className="about">
      <div className="about-bg-text">PROFILE</div>
      <div className="container">
        <div className="about-content-redesigned">
          <h2 className="about-headline glitch" data-text="ENGINEERING INTELLIGENCE">Engineering <span className="highlight-red">Intelligence</span></h2>
          <p className="about-subhead">Turning messy requirements into elegant, working products.</p>
          
          <div className="about-grid">
            <TiltCard className="about-card">
              <span className="card-number">01</span>
              <h3>The Mission</h3>
              <p>I build intelligent agents and RAG pipelines that solve real problems. My code doesn't just run; it thinks.</p>
            </TiltCard>
            <TiltCard className="about-card">
              <span className="card-number">02</span>
              <h3>The Craft</h3>
              <p>Full-stack development is a discipline. From database schemas to pixel-perfect UIs, I own the entire lifecycle.</p>
            </TiltCard>
            <TiltCard className="about-card">
              <span className="card-number">03</span>
              <h3>The Stack</h3>
              <p>Java, Python, Spring Boot, Flask. These aren't just tools; they are extensions of my engineering mindset.</p>
            </TiltCard>
          </div>

          <div className="about-specs">
            <div className="spec-item">
              <span className="spec-label">LOCATION</span>
              <span className="spec-value">Amaravati, India</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">EDUCATION</span>
              <span className="spec-value">Integrated M.Tech (VIT-AP)</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">STATUS</span>
              <span className="spec-value status-active">Available for Hire</span>
            </div>
          </div>

          <a href="resume.pdf" className="btn-resume" download>
            <span className="btn-text">Initiate Resume Download</span>
            <i className="fas fa-download" style={{marginLeft: '10px'}}></i>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
