import React from 'react';
import { motion } from 'framer-motion';

const Bubble = ({ size, delay, duration, left }) => (
  <motion.div
    className="absolute rounded-full bg-white/10 backdrop-blur-sm"
    style={{
      width: size,
      height: size,
      left: `${left}%`,
      bottom: '-20px',
    }}
    animate={{
      y: [0, -1000],
      x: [0, Math.random() * 50 - 25],
      opacity: [0.4, 0]
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: "easeOut"
    }}
  />
);

const BubblesEffect = () => {
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    size: Math.random() * 30 + 10,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
    left: Math.random() * 100,
    key: i
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <Bubble key={bubble.key} {...bubble} />
      ))}
    </div>
  );
};

export default BubblesEffect;