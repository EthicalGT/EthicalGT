import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

function FadeUpItem({ children, delay = 0, duration = 0.6, root = null }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    root,
    margin: '0px 0px -15% 0px',
    once: false,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}

export default function FadeUpOnScroll({
  children,
  delayStep = 0.1,
  duration = 0.6,
  scrollSelector = null, // pass selector string or leave null for window
}) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollSelector) {
      scrollRef.current = document.querySelector(scrollSelector);
    }
  }, [scrollSelector]);

  return (
    <>
      {React.Children.map(children, (child, i) => (
        <FadeUpItem
          key={i}
          delay={i * delayStep}
          duration={duration}
          root={scrollRef.current}
        >
          {child}
        </FadeUpItem>
      ))}
    </>
  );
}
