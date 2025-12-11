import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="highlight">Manoj Kumar Reddy</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="hero-description">
              I'm a full-stack developer and AI engineer. I work on projects across various domains, 
              specializing in building intelligent applications with RAG pipelines and modern web technologies.
            </p>
            <p className="hero-description">
              I have experience in full-stack development and AI solutions. Primarily, I work with 
              Java, Python, React, Spring Boot, Flask, LangChain, and various AI frameworks.
            </p>
          </motion.div>
          <motion.div 
            className="hero-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="https://github.com/Manoj7175" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/manoj-kumar-reddy-koduru-007580258/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:manojkumarreddy7175@gmail.com">Email</a>
            <a href="https://www.instagram.com/manoj_reddy_7175/" target="_blank" rel="noreferrer">Instagram</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
