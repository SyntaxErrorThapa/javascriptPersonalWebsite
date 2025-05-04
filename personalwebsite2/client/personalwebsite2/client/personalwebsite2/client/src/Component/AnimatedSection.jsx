import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function AnimatedSection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Comes from bottom
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default AnimatedSection;
