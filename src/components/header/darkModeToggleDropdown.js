// components/DropdownMenu.js

import { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { motion } from 'framer-motion';

const DarkModeToggleDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const dropdownRef = useRef(null);

    useEffect(() => {
        const preventScroll = (e) => {
          e.preventDefault();
        };
      
        if (isOpen) {
          document.body.style.overflow = 'hidden';
          document.body.style.height = '100vh';
          document.body.addEventListener('touchmove', preventScroll, { passive: false });
        } else {
          document.body.style.overflow = '';
          document.body.style.height = '';
          document.body.removeEventListener('touchmove', preventScroll);
        }
      
        return () => {
          document.body.removeEventListener('touchmove', preventScroll);
          document.body.style.overflow = '';
          document.body.style.height = '';
        };
      }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 2000,  // Increase animation duration
            easing: 'ease-in-out',
            once: true,     // Animation will occur every time the element is scrolled into view
        });
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark');
        // Dispatch a custom event to notify other components of the theme change
        window.dispatchEvent(new Event('themeChange'));
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-white dark:bg-gray-200 rounded-full ring ring-orange ring-inset dark:focus:ring-offset-1"
                aria-label='Header Dropdown Button'
            >
                {!!isOpen ?
                    <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#f26621"><path d="m280-400 200-200 200 200H280Z" /></svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#f26621"><path d="M480-360 280-560h400L480-360Z" /></svg>
                }
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-3 w-60 bg-white rounded-md shadow-lg py-1 z-20">
                    <div data-aos="fade" className="p-2 lg:px-4 text-gray-800 flex justify-between items-center"
                    // initial={{ opacity: 0, y: 20 }} // Start invisible and off-screen
                    // whileInView={{ opacity: 1, y: 0 }} // Animate when it comes into view
                    // viewport={{ once: true }} // Animate only once when it first comes into view
                    // transition={{ duration: 0.75 }}
                    >
                        <div className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" /></svg>
                            <span className="ml-2">Dark mode</span>
                        </div>
                        <div className="flex items-center">
                            <button aria-label='Dark Mode Toggle Button' onClick={toggleTheme} className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-1000 focus:outline-none focus:ring-2 focus:ring-offset-2 ${theme === 'light' ? 'bg-gray-300 focus:ring-offset-gray-800 focus:ring-white' : 'bg-gray-700 focus:ring-gray-800'}`}>
                                <span className={`inline-block w-4 h-4 transform bg-white rounded-full shadow transition-transform duration-300 ${theme === 'light' ? 'translate-x-1' : 'translate-x-6'}`} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DarkModeToggleDropdown;