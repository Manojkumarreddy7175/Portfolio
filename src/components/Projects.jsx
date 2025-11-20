import React from 'react';
import SectionWrapper from './SectionWrapper';
import TiltCard from './TiltCard';

const Projects = () => {
  return (
    <SectionWrapper id="projects" className="projects">
      <div className="container">
        <span className="section-label">03 // PORTFOLIO</span>
        <h2 className="section-title-large glitch" data-text="DEPLOYED SYSTEMS">DEPLOYED SYSTEMS</h2>
        
        <div className="projects-list">
          {/* Project 1 */}
          <TiltCard bodyClassName="project-row">
            <div className="project-meta">
              <span className="project-id">PRJ-001</span>
              <span className="project-status">DEPLOYED</span>
            </div>
            <div className="project-info">
              <h3 className="project-name">ApplyMate</h3>
              <p className="project-desc">AI Job Discovery Platform. Aggregates listings from multiple boards with automated email delivery and AI matching algorithms.</p>
              <div className="project-stack">
                <span>PYTHON</span>
                <span>SELENIUM</span>
                <span>STREAMLIT</span>
                <span>GENAI</span>
              </div>
            </div>
            <div className="project-actions">
              <a href="https://github.com/Manojkumarreddy7175/ApplyMate" target="_blank" rel="noreferrer" className="btn-action">
                SOURCE CODE <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </TiltCard>

          {/* Project 2 */}
          <TiltCard bodyClassName="project-row">
            <div className="project-meta">
              <span className="project-id">PRJ-002</span>
              <span className="project-status">DEPLOYED</span>
            </div>
            <div className="project-info">
              <h3 className="project-name">File Query GPT</h3>
              <p className="project-desc">Advanced RAG system supporting multi-format ingestion (PDF, PPT, Audio). 85% retrieval accuracy via LangChain pipeline.</p>
              <div className="project-stack">
                <span>LANGCHAIN</span>
                <span>CHROMADB</span>
                <span>WHISPER</span>
                <span>PYTHON</span>
              </div>
            </div>
            <div className="project-actions">
              <a href="https://github.com/Aniruth2003/Interactive-File-Query-GPT" target="_blank" rel="noreferrer" className="btn-action">
                SOURCE CODE <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </TiltCard>

          {/* Project 3 */}
          <TiltCard bodyClassName="project-row">
            <div className="project-meta">
              <span className="project-id">PRJ-003</span>
              <span className="project-status">LOCAL</span>
            </div>
            <div className="project-info">
              <h3 className="project-name">NL2SQL Agent</h3>
              <p className="project-desc">Privacy-first AI backend translating natural language to optimized SQLite queries for e-commerce analytics.</p>
              <div className="project-stack">
                <span>FASTAPI</span>
                <span>MISTRAL LLM</span>
                <span>SQLITE</span>
                <span>PYTHON</span>
              </div>
            </div>
            <div className="project-actions">
              <a href="https://github.com/Manojkumarreddy7175/nl2sql-ecommerce-agent" target="_blank" rel="noreferrer" className="btn-action">
                SOURCE CODE <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </TiltCard>

          {/* Project 4 */}
          <TiltCard bodyClassName="project-row">
            <div className="project-meta">
              <span className="project-id">PRJ-004</span>
              <span className="project-status">LIVE</span>
            </div>
            <div className="project-info">
              <h3 className="project-name">Find Your AI</h3>
              <p className="project-desc">Discovery platform for 45+ AI tools with advanced categorization and search filtering.</p>
              <div className="project-stack">
                <span>NEXT.JS</span>
                <span>TYPESCRIPT</span>
                <span>TAILWIND</span>
              </div>
            </div>
            <div className="project-actions">
              <a href="https://find-your-ai-one.vercel.app/" target="_blank" rel="noreferrer" className="btn-action">
                LIVE DEMO <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </TiltCard>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
