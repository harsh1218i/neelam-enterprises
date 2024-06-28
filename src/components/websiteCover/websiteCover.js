"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';

const images = [
  {
    src: '/images/img1.jpg',
    alt: 'Image 1',
    objectFit: 'contain',
  },
  {
    src: '/images/img2.jpg',
    alt: 'Image 2',
    objectFit: 'contain',
  },
  {
    src: '/images/img3.jpg',
    alt: 'Image 3',
    objectFit: 'contain',
  },
  {
    src: '/images/img4.jpg',
    alt: 'Image 4',
    objectFit: 'contain',
  },
];

// const images = [
//   {
//     src: '/images/img1-large.jpg',
//     srcSet: '/images/img1-small.jpg 480w, /images/img1-medium.jpg 800w, /images/img1-large.jpg 1200w',
//     sizes: '(max-width: 480px) 480px, (max-width: 800px) 800px, 1200px',
//     alt: 'Image 1',
//     objectFit: 'cover',
//   },
//   {
//     src: '/images/img2-large.jpg',
//     srcSet: '/images/img2-small.jpg 480w, /images/img2-medium.jpg 800w, /images/img2-large.jpg 1200w',
//     sizes: '(max-width: 480px) 480px, (max-width: 800px) 800px, 1200px',
//     alt: 'Image 2',
//     objectFit: 'cover',
//   },
//   {
//     src: '/images/img3-large.jpg',
//     srcSet: '/images/img3-small.jpg 480w, /images/img3-medium.jpg 800w, /images/img3-large.jpg 1200w',
//     sizes: '(max-width: 480px) 480px, (max-width: 800px) 800px, 1200px',
//     alt: 'Image 3',
//     objectFit: 'cover',
//   },
//   {
//     src: '/images/img4-large.jpg',
//     srcSet: '/images/img4-small.jpg 480w, /images/img4-medium.jpg 800w, /images/img4-large.jpg 1200w',
//     sizes: '(max-width: 480px) 480px, (max-width: 800px) 800px, 1200px',
//     alt: 'Image 4',
//     objectFit: 'cover',
//   },
// ];


const WebsiteCover = (comingFrom) => {
  const [current, setCurrent] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const length = images.length;
  const debounceRef = useRef(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  //   }, 8000); // Change image every 3 seconds
  //   return () => clearInterval(interval);
  // }, [length]);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // console.log(scrollTop, maxScroll, newOpacity, 'andar')
      const scrollTop = window.scrollY;
      const maxScroll = 500;
      const newOpacity = Math.max(1 - scrollTop / maxScroll, 0.2);
      setOpacity(newOpacity);
      console.log(scrollTop, maxScroll, newOpacity, 'andar')
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nextSlide = () => {
    if (!debounceRef.current) {
      debounceRef.current = true;
      setCurrent(current === length - 1 ? 0 : current + 1);
      setTimeout(() => (debounceRef.current = false), 1000); // Adjust debounce time as needed
    }
  };

  const prevSlide = () => {
    if (!debounceRef.current) {
      debounceRef.current = true;
      setCurrent(current === 0 ? length - 1 : current - 1);
      setTimeout(() => (debounceRef.current = false), 1000); // Adjust debounce time as needed
    }
  };

  const goToSlide = (index) => {
    if (!debounceRef.current) {
      debounceRef.current = true;
      setCurrent(index);
      setTimeout(() => (debounceRef.current = false), 1000); // Adjust debounce time as needed
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div {...handlers} style={{ opacity: opacity, transition: 'opacity 0.5s ease', }} className={`flex flex-col justify-center items-center w-full bg-gray-900 ${comingFrom === "home" ? '' : 'main-website-cover bg-custom-2xl bg-custom-xl bg-custom-lg bg-custom-md bg-custom-sm bg-custom-ssm'}`}>
      {comingFrom === "home" ?
        <>
          {!isTouchDevice && (
            <>
              <button onClick={prevSlide} className="absolute left-0 text-5xl text-white z-10 bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition">&#10094;</button>
              <button onClick={nextSlide} className="absolute right-0 text-5xl text-white z-10 bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition">&#10095;</button>
            </>
          )}
          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 1, ease: "easeIn" }}
              className="w-full flex justify-center items-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src={images[current].src}
                  alt={images[current].alt}
                  width={1500}
                  height={600}
                  layout="intinsic"
                  objectFit={images[current].objectFit}
                  className="rounded-lg"
                />
                {/* <Image
              src={images[current].src}
              srcSet={images[current].srcSet}
              sizes={images[current].sizes}
              alt={images[current].alt}
              layout="fill"
              objectFit={images[current].objectFit}
              className="rounded-lg"
            /> */}
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="relative bottom-4 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-colors ${index === current ? 'selected-button' : 'bg-white'}`}
              />
            ))}
          </div>
        </>
        : <div></div>
      }
    </div>
  );
};

export default WebsiteCover;