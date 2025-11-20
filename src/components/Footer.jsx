import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-logo">MANOJ.SYSTEM</span>
            <span className="brand-tagline">ENGINEERING INTELLIGENCE FOR THE WEB.</span>
          </div>
          
          <div className="footer-links">
            <a href="#home">SYS.HOME</a>
            <a href="#about">SYS.ABOUT</a>
            <a href="#skills">SYS.SKILLS</a>
            <a href="#projects">SYS.PROJECTS</a>
            <a href="#contact">SYS.CONTACT</a>
          </div>

          <div className="footer-social">
            <a href="https://github.com/Manoj7175" target="_blank" rel="noreferrer" className="social-link">GITHUB</a>
            <a href="https://www.linkedin.com/in/manoj-kumar-reddy-koduru-007580258/" target="_blank" rel="noreferrer" className="social-link">LINKEDIN</a>
            <a href="https://www.instagram.com/manoj_reddy_7175/" target="_blank" rel="noreferrer" className="social-link">INSTAGRAM</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="system-status">
            <div className="status-dot"></div>
            <span>SYSTEM ONLINE // ALL SYSTEMS OPERATIONAL</span>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} MANOJ KUMAR REDDY. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
