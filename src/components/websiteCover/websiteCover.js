"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { usePathname } from "next/navigation";

const images = [
  {
    src: "/images/img1.jpg",
    alt: "Image 1",
    objectFit: "cover",
  },
  {
    src: "/images/img2.jpg",
    alt: "Image 2",
    objectFit: "cover",
  },
  {
    src: "/images/img3.jpg",
    alt: "Image 3",
    objectFit: "cover",
  },
  {
    src: "/images/img4.jpg",
    alt: "Image 4",
    objectFit: "cover",
  },
];

const WebsiteCover = ({ comingFrom }) => {
  const [current, setCurrent] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const length = images.length;
  const debounceRef = useRef(false);
  const pathName = usePathname();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 8000); // Change image every 8 seconds
    return () => clearInterval(interval);
  }, [length]);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 500;
      const newOpacity = Math.max(1 - scrollTop / maxScroll, 0.2);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
    <div
      {...handlers}
      style={{ opacity: opacity, transition: "opacity 0.5s ease" }}
      className={`flex flex-col justify-center items-center w-full bg-gray-900 ${pathName.includes("/contact-us") ? "main-website-cover bg-custom-2xl bg-custom-xl bg-custom-lg bg-custom-md bg-custom-sm bg-custom-ssm" : ""}`}
    >
      {pathName.includes("/contact-us") ? null : (
        <>
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
          <div className="relative w-full h-[40vh] md:h-[65vh] lg:h-[80vh] xl:h-[95vh]">
            <AnimatePresence initial={false}>
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-0 w-full h-full"
              >
                <Image
                  src={images[current].src}
                  alt={images[current].alt}
                  layout="fill"
                  objectFit="cover"
                // className="rounded-lg"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="relative bottom-4 h-0 flex space-x-2">
            {images.map((_, index) => (
              <button
                aria-label={index}
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-colors ${index === current ? "bg-blue-500" : "bg-white"
                  }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default WebsiteCover;