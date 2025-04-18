"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggleDropdown from './darkModeToggleDropdown';
import { usePathname } from "next/navigation";
import HeaderTop from './headerTop';
import ScrollProgressBar from './scrollProgressBar';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // Main menu state
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state for "About"
    const [isMobileView, setIsMobileView] = useState(false);
    const hamBurgerRef = useRef(null);
    const dropdownRef = useRef(null);
    const pathName = usePathname();
    const isContactUsPage = pathName.includes("/contact-us");

    // 👇 Scroll lock logic
    useEffect(() => {
        const preventScroll = (e) => e.preventDefault();
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
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (hamBurgerRef.current && !hamBurgerRef.current.contains(event.target) && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setTimeout(() => setIsOpen(false), 0);
            }
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setTimeout(() => setIsDropdownOpen(false), 0);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // 👇 Listen for DarkModeToggleDropdown open event and close hamburger if needed
    useEffect(() => {
        const handleDarkModeOpen = () => {
            setIsOpen(false);
        };
        window.addEventListener('darkModeDropdownOpened', handleDarkModeOpen);
        return () => window.removeEventListener('darkModeDropdownOpened', handleDarkModeOpen);
    }, []);

    const disableContactUs = (event) => {
        if (isContactUsPage) {
            event.preventDefault();
        }
    };

    // Toggle dropdown for About section
    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsDropdownOpen(prev => !prev);
    };

    return (
        <>
            <ScrollProgressBar />
            <HeaderTop />
            {/* To blur the background when hamburger is open in movile view */}
            {/* {isOpen && (<div className="fixed inset-0 z-40 bg-black/70 dark:bg-black/80 backdrop-blur-sm lg:hidden" />)} */}
            <header className='flex z-50 justify-center items-center shadow-3xl shadow-black dark:shadow-white bg-gray-200 dark:bg-gray-800 sticky top-0'>
                <div className={`w-full sticky flex justify-between bg-gray-200 dark:bg-gray-800 top-0 z-[101] h-[56px] px-4 xl:px-20 lg:px-10 max-w-[1310px] ${!isOpen ? 'items-center' : ''}`}>
                    <div className="block w-full lg:flex md:justify-between">
                        <div className="flex justify-between items-center h-[56px]">
                            <div className="text-lg font-bold inline-block">
                                <Link href="/" legacyBehavior>
                                    <div className="relative w-[56px] h-[56px] flex items-center justify-center cursor-pointer">
                                        {/* Animated border wrapper */}
                                        <div className="absolute inset-0 z-0 rounded-sm overflow-hidden">
                                            {/* Moving border layer */}
                                            <div className="absolute inset-0 animate-border-move bg-[length:200%_200%] bg-gradient-to-tr to-lime-100 via-lime-400 from-green-700" />
                                        </div>
                                        {/* Inner white border to create spacing */}
                                        <div className="absolute inset-[2px] rounded-sm bg-gray-200 dark:bg-gray-800 z-10" />
                                        {/* Image on top */}
                                        <Image alt="Logo" className="relative z-20 rounded-sm" src="/favicon-16x16.png" width={56} height={56} />
                                    </div>
                                </Link>
                            </div>
                            <div className="flex lg:hidden items-center gap-3">
                                <a className={`md:w-auto text-center text-white text-text-md leading-text-md px-2 hover:no-underline hover:text-white rounded bg-orangee h-[36px] flex items-center ${pathName.includes("/contact-us") ? 'opacity-50' : ''}`} onClick={disableContactUs} href="/contact-us">Contact Us</a>
                                <div onClick={() => {
                                    setIsOpen(!isOpen);
                                    // 👇 Dispatch custom event to close dropdown
                                    window.dispatchEvent(new Event('hamburgerToggled'));
                                }} className="lg:hidden text-gray-800 dark:text-gray-200" ref={hamBurgerRef}>
                                    {isOpen ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#000000"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#000000"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" /></svg>
                                    )}
                                </div>
                            </div>
                        </div>
                        <nav className={`${isOpen ? 'flex' : 'hidden'} z-50 px-4 lg:flex lg:items-center bg-gray-200 dark:bg-gray-800 lg:h-[56px] mt-2 ms-12 lg:m-0 lg:w-auto rounded`}>
                            <ul className="lg:flex lg:justify-between text-base lg:pt-0">
                                <li>
                                    <Link href="/" legacyBehavior>
                                        <a onClick={() => setIsOpen(false)} className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orangee dark:text-gray-200">Home</a>
                                    </Link>
                                </li>
                                {/* About Dropdown */}
                                <li className="relative" ref={dropdownRef}>
                                    <button onClick={toggleDropdown} className="inline lg:p-4 py-3 px-0 border-b-2 border-transparent hover:border-orangee dark:text-gray-200">About
                                        <svg className='inline' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#f26621"><path d="M480-346.43 256.82-568.61h446.36L480-346.43Z" /></svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    {isDropdownOpen && (
                                        <ul className={`${isMobileView ? 'block' : 'absolute w-60'} bg-white dark:bg-gray-800 shadow-lg py-2 rounded-lg`}>
                                            <li>
                                                <Link href="about/portfolio" legacyBehavior>
                                                    <a onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-orangee dark:hover:bg-gray-700 dark:text-gray-200">Personal Portfolio</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/about/company" legacyBehavior>
                                                    <a onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-orangee dark:hover:bg-gray-700 dark:text-gray-200">Company Info</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/about/certifications" legacyBehavior>
                                                    <a onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-orangee dark:hover:bg-gray-700 dark:text-gray-200">Certifications & Licenses</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <Link href="/services" legacyBehavior>
                                        <a onClick={() => setIsOpen(false)} className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orangee dark:text-gray-200">Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/gallery" legacyBehavior>
                                        <a onClick={() => setIsOpen(false)} className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orangee dark:text-gray-200">Gallery</a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="hidden lg:flex md:flex-row justify-center md:justify-start items-center gap-6">
                            <a className={`w-full text-center text-white px-4 hover:no-underline hover:text-white rounded bg-orangee hover:bg-orange-400 h-[36px] flex items-center ${pathName.includes("/contact-us") ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} onClick={disableContactUs} href='/contact-us'>Contact Us</a>
                        </div>
                    </div>
                    <div className={`flex items-center pl-2 md:pl-4 h-[56px] ${isOpen ? 'py-3' : ''}`}>
                        <DarkModeToggleDropdown />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;