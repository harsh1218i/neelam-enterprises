// components/DropdownMenu.js
import { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { motion } from 'framer-motion';

const DarkModeToggleDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const dropdownRef = useRef(null);

    // To prevent scrolling while mode change dorpdown is open
    // useEffect(() => {
    //     const preventScroll = (e) => {
    //         e.preventDefault();
    //     };

    //     if (isOpen) {
    //         document.body.style.overflow = 'hidden';
    //         document.body.style.height = '100vh';
    //         document.body.addEventListener('touchmove', preventScroll, { passive: false });
    //     } else {
    //         document.body.style.overflow = '';
    //         document.body.style.height = '';
    //         document.body.removeEventListener('touchmove', preventScroll);
    //     }

    //     return () => {
    //         document.body.removeEventListener('touchmove', preventScroll);
    //         document.body.style.overflow = '';
    //         document.body.style.height = '';
    //     };
    // }, [isOpen]);

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
        AOS.init({
            duration: 1000,  // Increase animation duration
            easing: 'ease-in-out',
            once: true,     // Animation will occur every time the element is scrolled into view
        });

        if (localStorage.getItem('theme') === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            setTheme('light');
        }

        // 👇 Listen for hamburger toggle and close dropdown if open
        const handleHamburgerToggle = () => {
            setIsOpen(false);
        };
        window.addEventListener('hamburgerToggled', handleHamburgerToggle);
        return () => window.removeEventListener('hamburgerToggled', handleHamburgerToggle);
    }, []);

    const toggleTheme = () => {
        // setTimeout(() => {
        //     setIsOpen(false)
        // }, 500);
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
                onClick={() => {
                    setIsOpen(!isOpen);
                    // 👇 Dispatch custom event to close hamburger if this is opening
                    if (!isOpen) window.dispatchEvent(new Event('darkModeDropdownOpened'));
                }}
                className="flex items-center text-white dark:bg-gray-200 rounded-full ring ring-orange ring-inset dark:focus:ring-offset-1"
                aria-label='Header Dropdown Button'
            >
                {!!isOpen ?
                    <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#f26621"><path d="m280-400 200-200 200 200H280Z" /></svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#f26621"><path d="M480-360 280-560h400L480-360Z" /></svg>
                }
            </button>
            {isOpen && (
                <div className='@container'>
                    {/* <div className='absolute right-0 mt-4 min-w-52 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-20 border-2 border-black dark:border-white'>
                    <div data-aos="fade" className="p-2 flex justify-between items-center">
                        <div className='flex items-center'>
                            {theme === 'light' ?
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" /></svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9D9D9"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" /></svg>
                            }
                            <span className="ml-2">{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
                        </div>
                        <div className="flex items-center">
                            <button aria-label='Dark Mode Toggle Button' onClick={toggleTheme} className={`relative inline-flex items-center h-6 dark:bg-white bg-gray-800 rounded-full w-11 transition-colors duration-1000 focus:outline-none focus:ring-2 focus:ring-offset-2 ${theme === 'light' ? 'bg-gray-300 focus:ring-offset-gray-800 focus:ring-white' : 'bg-gray-700 focus:ring-gray-800'}`}>
                                <span className={`inline-block w-4 h-4 transform bg-white dark:bg-gray-800 rounded-full shadow transition-transform duration-300 ${theme === 'light' ? 'translate-x-1' : 'translate-x-6'}`} />
                            </button>
                        </div>
                    </div> */}

                    <div className='absolute right-0 mt-4 max-sm:w-[80vw] sm:min-w-96 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-20 border-2 border-black dark:border-white'>
                        <div data-aos="fade" className="p-2 flex justify-between items-center">
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={theme === 'light' ? "#434343" : "#D9D9D9"}><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" /></svg>
                                <span className='ml-1'>Light mode</span>
                            </div>
                            <div className="flex items-center">
                                <button aria-label='Dark Mode Toggle Button' onClick={toggleTheme} className={`relative inline-flex items-center h-6 w-11 rounded-full overflow-hidden transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${theme === 'light' ? 'bg-gray-300 focus:ring-offset-gray-800 focus:ring-white' : 'bg-gray-700 focus:ring-gray-800'}`}>
                                    <span className={`inline-block w-4 h-4 transform rounded-full shadow transition-transform duration-200 ${theme === 'light' ? 'translate-x-1 bg-white' : 'translate-x-6 bg-gray-800'}`} />
                                </button>
                            </div>
                            <div className='flex items-center'>
                                <span>Dark mode</span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={theme === 'light' ? "#434343" : "#D9D9D9"}><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DarkModeToggleDropdown;