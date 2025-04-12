"use client";
import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { usePathname } from "next/navigation";

const images = [
  { src: "/images/img1.jpg", alt: "Image 1", objectFit: "cover", },
  { src: "/images/img2.jpg", alt: "Image 2", objectFit: "cover", },
  { src: "/images/img3.jpg", alt: "Image 3", objectFit: "cover", },
  { src: "/images/img4.jpg", alt: "Image 4", objectFit: "cover", },
];

const WebsiteCover = ({ comingFrom }) => {
  const [current, setCurrent] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const length = images.length;
  const debounceRef = useRef(false);
  const pathName = usePathname();

  useEffect(() => {
    const interval = setInterval(() => { setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1)); }, 8000); // Change image every 8 seconds
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
    return () => { window.removeEventListener("scroll", handleScroll); };
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
    <div {...handlers} style={{ opacity: opacity, transition: "opacity 0.5s ease" }} className={`relative w-full overflow-hidden ${pathName.includes("/contact-us") ? "main-website-cover bg-custom-2xl bg-custom-xl bg-custom-lg bg-custom-md bg-custom-sm bg-custom-ssm" : ""}`}>
      {pathName.includes("/contact-us") ? null : (
        <>
          {/* Image + Text Section */}
          <div className="relative w-full h-[40vh] md:h-[65vh] lg:h-[80vh] xl:h-[95vh] flex items-center justify-center text-center">
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
            {/* Background Image */}
            <div key={current} className="absolute top-0 left-0 w-full h-full z-0">
              <Image src={images[current].src} alt={images[current].alt} layout="fill" objectFit="cover" />
              {/* <video src="/images/Sample.mp4" autoPlay loop muted></video> */}
            </div>
            {/* Overlay Text */}
            <div className="z-20 px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">Neelam Enterprises</h1>
              <p className="text-md md:text-xl text-white drop-shadow-md mt-2">Government-Registered Contractor in Madhya Pradesh</p>
              <p className="text-md md:text-xl text-white drop-shadow-md">Specializing in PWD, CPWD, Indian Railways, and MES Tender Execution</p>
            <div className="flex justify-center mt-6 gap-4">
              <a href="/services" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                View Services
              </a>
              <a href="/contact-us" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded">
                Contact Us
              </a>
            </div>
            </div>
          </div>
          {/* Slide navigation arrows (only on non-touch devices) */}
          {!isTouchDevice && (
            <>
              <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-5xl z-30 bg-black bg-opacity-40 hover:bg-opacity-60 rounded-full p-2 transition">&#10094;</button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-5xl z-30 bg-black bg-opacity-40 hover:bg-opacity-60 rounded-full p-2 transition">&#10095;</button>
            </>
          )}
          {/* Dot indicators */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
            {images.map((_, index) => (<button aria-label={index} key={index} onClick={() => goToSlide(index)} className={`h-3 w-3 rounded-full transition-colors ${index === current ? "bg-orange" : "bg-white"}`} />))}
          </div>
        </>
      )}
    </div>
  );
};

export default WebsiteCover;