import React from 'react';
import Avatar from './Avatar';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <motion.div 
            className="hero-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="hero-badge">
              <span className="star-icon">✦</span>
              <span>Available for new projects</span>
            </div>
            <h1 className="hero-title">
              Building <span className="highlight-orange">Digital Products</span> &amp; <span className="highlight-orange">AI Solutions</span>
            </h1>
            <div className="hero-tags">
              <span className="tag">Full Stack</span>
              <span className="tag-dot">•</span>
              <span className="tag">AI Engineer</span>
              <span className="tag-dot">•</span>
              <span className="tag">RAG Expert</span>
            </div>
            <p className="hero-description">
              I'm <span className="highlight-interactive">Manoj Kumar Reddy</span>, a developer passionate about building intelligent applications that solve real problems. Specializing in full-stack development and AI-powered solutions.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Get In Touch</a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/Manojkumarreddy7175" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/manojkumarreddy7175" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-linkedin"></i></a>
              <a href="mailto:manojkumarreddy7175@gmail.com" className="social-icon"><i className="fas fa-envelope"></i></a>
            </div>
          </motion.div>
          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
