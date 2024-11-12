// import { motion } from 'framer-motion';

export default function AnimatedHeading() {
  return (
    <div
    // initial={{ opacity: 0, y: 100 }} // Start invisible and off-screen
    // whileInView={{ opacity: 1, y: 0 }} // Animate when it comes into view
    // viewport={{ once: true }} // Animate only once when it first comes into view
    // transition={{ duration: 1 }}
    >
      Welcome to My Next.js Project!
      <h2>Scroll-triggered Animation!</h2>
      <p>This element will animate as you scroll to it.</p>
    </div>
  );
}