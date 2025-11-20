import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className, delay = 0 }) => {
  return (
    <section id={id} className={className} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
