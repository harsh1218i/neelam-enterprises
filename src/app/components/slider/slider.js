"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import './slider.scss';

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

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const length = images.length;
  const debounceRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 8000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [length]);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
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
    <div
      {...handlers}
      className="relative flex flex-col justify-center items-center lg:h-screen w-full bg-gray-900"
    >
      {!isTouchDevice && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 text-5xl text-white z-10 bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 text-5xl text-white z-10 bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
          >
            &#10095;
          </button>
        </>
      )}
      <AnimatePresence initial={false}>
        <motion.div
          // key={current}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          // transition={{ duration: 1 }}
          // className="w-full h-full flex justify-center items-center"
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full flex justify-center items-center"
        >
          <div className="relative w-full h-full">
            <Image
              src={images[current].src}
              alt={images[current].alt}
              width={1500}
              height={600}
              layout="intrinsic"
              objectFit={images[current].objectFit}
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors ${index === current ? 'selected-button' : 'bg-white'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
