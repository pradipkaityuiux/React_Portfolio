import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';

const Section = ({ children, id }) => {
  const ref = useRef();
  const isInView = useInView(ref, { threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{ marginBottom: '2rem' }}
    >
      {children}
    </motion.div>
  );
};
export default Section;