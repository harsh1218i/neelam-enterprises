// components/ScrollToTopButton.js
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the user scrolls down 100px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll the window to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    !!isVisible && (<button aria-label='Scroll To Top' onClick={scrollToTop} className='fixed bottom-[50px] text-xl font-extrabold shadow-[0px_0px_20px_5px_rgba(242,142,33,0.5)] right-[50px] border-none rounded-lg px-[15px] py-[10px] text-current bg-black dark:bg-white text-orangee z-50'>↑</button>)
  );
};

export default ScrollToTopButton;