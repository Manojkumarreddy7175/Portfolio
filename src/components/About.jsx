import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About</h2>
          <p className="section-description">
            I'm a pre-final year student studying Computer Science at VIT-AP, Amaravati. 
            I mainly work in AI/ML, full-stack development, and building intelligent systems with RAG pipelines.
          </p>
          <div className="skills-list">
            {["Java", "Python", "JavaScript", "React", "Spring Boot", "Flask", "FastAPI", "LangChain", "RAG Pipelines", "OpenAI API", "MySQL", "MongoDB"].map((skill, index) => (
              <motion.span 
                key={index} 
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05, backgroundColor: "var(--accent-color)", color: "#fff", borderColor: "var(--accent-color)" }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
