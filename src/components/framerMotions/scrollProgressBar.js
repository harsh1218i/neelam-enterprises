// import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgressBar() {
  // const { scrollYProgress } = useScroll();

  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // });

  return (
    // <motion.div className="progress-bar" style={{ scaleX }} />
    <div className="progress-bar"
      // style={{
      //   position: 'fixed',
      //   top: 0,
      //   left: 0,
      //   right: 0,
      //   height: '5px',
      //   backgroundColor: 'blue',
      //   scaleX,
      //   transformOrigin: '0%',
      // }}
    />
  );
}

export default ScrollProgressBar;
