import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contact</h2>
          <p className="section-description">Get in touch if you'd like to work together or just say hi.</p>
          
          <div className="contact-links">
            <a href="mailto:manojkumarreddy7175@gmail.com">manojkumarreddy7175@gmail.com</a>
            <a href="https://github.com/manoj7654" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/manojkumarreddy7654" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
