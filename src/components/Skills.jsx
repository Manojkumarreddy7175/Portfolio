import React from 'react';
import SectionWrapper from './SectionWrapper';
import TiltCard from './TiltCard';

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="skills">
      <div className="container">
        <span className="section-label">02 // CAPABILITIES</span>
        <h2 className="section-title-large glitch" data-text="TECH ARSENAL">TECH ARSENAL</h2>
        
        <div className="skills-matrix">
          {/* Core Module */}
          <TiltCard bodyClassName="skill-module">
            <div className="module-header">
              <span className="module-id">SYS.01</span>
              <h3>LANGUAGES & CORE</h3>
            </div>
            <div className="module-content">
              <div className="tech-bar">
                <div className="tech-info">
                  <span className="tech-name">JAVA</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{width: '95%'}}></div>
                </div>
              </div>
              <div className="tech-bar">
                <div className="tech-info">
                  <span className="tech-name">PYTHON</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="tech-bar">
                <div className="tech-info">
                  <span className="tech-name">JAVASCRIPT</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="tech-bar">
                <div className="tech-info">
                  <span className="tech-name">SQL</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{width: '88%'}}></div>
                </div>
              </div>
              <div className="tech-bar">
                <div className="tech-info">
                  <span className="tech-name">DSA & OOP</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{width: '92%'}}></div>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Backend Module */}
          <TiltCard bodyClassName="skill-module">
            <div className="module-header">
              <span className="module-id">SYS.02</span>
              <h3>BACKEND INFRA</h3>
            </div>
            <div className="module-content">
              <div className="tech-item">SPRING BOOT</div>
              <div className="tech-item">FLASK & FASTAPI</div>
              <div className="tech-item">MYSQL</div>
              <div className="tech-item">MONGODB</div>
              <div className="tech-item">FIREBASE</div>
              <div className="tech-item">MICROSERVICES</div>
            </div>
          </TiltCard>

          {/* AI Module */}
          <TiltCard bodyClassName="skill-module highlight-module">
            <div className="module-header">
              <span className="module-id">SYS.03</span>
              <h3>AI & INTELLIGENCE</h3>
            </div>
            <div className="module-content">
              <div className="tech-item">LANGCHAIN</div>
              <div className="tech-item">RAG PIPELINES</div>
              <div className="tech-item">OPENAI API</div>
              <div className="tech-item">GOOGLE GENAI</div>
              <div className="tech-item">OLLAMA</div>
              <div className="tech-item">CHROMADB</div>
            </div>
          </TiltCard>

          {/* Tools Module */}
          <TiltCard bodyClassName="skill-module">
            <div className="module-header">
              <span className="module-id">SYS.04</span>
              <h3>OPS & TOOLS</h3>
            </div>
            <div className="module-content">
              <div className="tech-item">GIT & GITHUB</div>
              <div className="tech-item">SELENIUM</div>
              <div className="tech-item">FIRECRAWL API</div>
              <div className="tech-item">WEB SCRAPING</div>
              <div className="tech-item">AGILE / SDLC</div>
            </div>
          </TiltCard>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
