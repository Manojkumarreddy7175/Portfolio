import React from 'react';
import SectionWrapper from './SectionWrapper';
import TiltCard from './TiltCard';

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="contact">
      <div className="container">
        <span className="section-label">04 // UPLINK</span>
        <h2 className="section-title-large glitch" data-text="INITIATE CONTACT">INITIATE CONTACT</h2>
        
        <div className="contact-grid">
          <div className="contact-details">
            <div className="contact-block">
              <span className="block-label">PRIMARY FREQUENCY</span>
              <a href="mailto:manojkumarreddy7175@gmail.com" className="block-value">manojkumarreddy7175@gmail.com</a>
            </div>
            
           
            <div className="contact-block">
              <span className="block-label">COORDINATES</span>
              <span className="block-value">Amaravati, India (VIT-AP)</span>
            </div>
          </div>

          <TiltCard bodyClassName="contact-terminal">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="terminal-title">MESSAGE_TRANSMITTER.EXE</span>
            </div>
            <form className="contact-form">
              <div className="input-group">
                <label>&gt; SENDER_ID:</label>
                <input type="text" name="name" required autoComplete="off" />
              </div>
              <div className="input-group">
                <label>&gt; RETURN_ADDRESS:</label>
                <input type="email" name="email" required autoComplete="off" />
              </div>
              <div className="input-group">
                <label>&gt; SUBJECT_LINE:</label>
                <input type="text" name="subject" required autoComplete="off" />
              </div>
              <div className="input-group">
                <label>&gt; PAYLOAD:</label>
                <textarea name="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn-submit">
                TRANSMIT_DATA <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </TiltCard>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
