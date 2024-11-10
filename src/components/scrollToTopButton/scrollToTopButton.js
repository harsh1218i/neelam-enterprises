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
    isVisible && (
      <button
        aria-label='scrollToTopButton'
        onClick={scrollToTop}
        className='fixed bottom-[50px] right-[50px] border-none rounded-full px-[15px] py-[10px] text-current bg-black dark:bg-white text-orange'
        style={{
          // backgroundColor: '#000',
        }}
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;