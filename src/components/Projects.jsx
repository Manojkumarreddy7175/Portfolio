import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "ApplyMate",
      description: "AI Job Discovery Platform. Aggregates listings from multiple boards with automated email delivery and AI matching algorithms.",
      tech: ["Python", "Selenium", "Streamlit", "GenAI"],
      link: "https://github.com/Manojkumarreddy7175/ApplyMate"
    },
    {
      title: "File Query GPT",
      description: "Advanced RAG system supporting multi-format ingestion (PDF, PPT, Audio). 85% retrieval accuracy via LangChain pipeline.",
      tech: ["LangChain", "ChromaDB", "Whisper", "Python"],
      link: "https://github.com/Aniruth2003/Interactive-File-Query-GPT"
    },
    {
      title: "NL2SQL Agent",
      description: "Privacy-first AI backend translating natural language to optimized SQLite queries for e-commerce analytics.",
      tech: ["FastAPI", "Mistral LLM", "SQLite", "Python"],
      link: "https://github.com/Manojkumarreddy7175/nl2sql-ecommerce-agent"
    },
    {
      title: "Find Your AI",
      description: "Discovery platform for 45+ AI tools with advanced categorization and search filtering.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      link: "https://find-your-ai-one.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="project-main">
                <a href={project.link} target="_blank" rel="noreferrer" className="project-title-link">
                  {project.title}
                  <span className="arrow">↗</span>
                </a>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
