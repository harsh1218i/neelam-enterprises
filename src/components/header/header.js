"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggleDropdown from './darkModeToggleDropdown';
import { usePathname } from "next/navigation";
import HeaderTop from './headerTop';

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
            if (window.innerWidth >= 1024 && hamBurgerRef.current && !hamBurgerRef.current.contains(event.target)) {
                setTimeout(() => setIsOpen(false), 0);
            }
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setTimeout(() => setIsDropdownOpen(false), 0);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
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
            <HeaderTop />
            <header className='flex justify-center items-center bg-white dark:bg-gray-800 sticky z-10 top-0'>
                <div className={`w-full sticky flex justify-between top-0 z-[101] bg-white dark:bg-gray-800 h-[56px] xl:px-20 lg:px-10 max-w-[1310px] ${!isOpen ? 'items-center' : ''}`}>
                    <div className="block w-full lg:flex md:justify-between">
                        <div className="flex justify-between items-center h-[56px]">
                            <div className="text-lg font-bold inline-block">
                                <Link href="/" legacyBehavior>
                                    <a className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
                                        <Image alt='Logo' src='/favicon-16x16.png' width={67} height={60} />
                                    </a>
                                </Link>
                            </div>
                            <div className="flex lg:hidden items-center gap-3">
                                <a className={`md:w-auto text-center text-white text-text-md leading-text-md px-2 hover:no-underline hover:text-white rounded bg-orange h-[36px] flex items-center ${pathName.includes("/contact-us") ? 'opacity-50' : ''}`} onClick={disableContactUs} href="/contact-us">Contact Us</a>
                                <div onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-800 dark:text-gray-200" ref={hamBurgerRef}>
                                    {isOpen ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#000000"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#000000"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" /></svg>
                                    )}
                                </div>
                            </div>
                        </div>
                        <nav className={`${isOpen ? 'flex' : 'hidden'} px-4 lg:flex lg:items-center bg-white dark:bg-gray-800 lg:h-[56px] mt-2 ms-12 lg:m-0 lg:w-auto rounded`}>
                            <ul className="lg:flex lg:justify-between text-base lg:pt-0">
                                <li>
                                    <Link href="/" legacyBehavior>
                                        <a onClick={() => setIsOpen(false)} className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange dark:text-gray-200">Home</a>
                                    </Link>
                                </li>
                                {/* About Dropdown */}
                                <li className="relative" ref={dropdownRef}>
                                    <button onClick={toggleDropdown} className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange dark:text-gray-200">About</button>
                                    {/* Dropdown menu */}
                                    {isDropdownOpen && (
                                        <ul className={`${isMobileView ? 'block' : 'absolute w-48'} bg-white dark:bg-gray-800 shadow-lg py-2 rounded-lg`}>
                                            <li>
                                                <Link href="/portfolio" legacyBehavior>
                                                    <a onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-orange dark:hover:bg-gray-700 dark:text-gray-200">
                                                        Personal Portfolio
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/about-us" legacyBehavior>
                                                    <a onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-orange dark:hover:bg-gray-700 dark:text-gray-200">
                                                        Company Info
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>

                                <li>
                                    <Link href="/services" legacyBehavior>
                                        <a onClick={() => setIsOpen(false)} className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange dark:text-gray-200">
                                            Services
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/gallery" legacyBehavior>
                                        <a onClick={() => setIsOpen(false)} className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange dark:text-gray-200">
                                            Gallery
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="hidden lg:flex md:flex-row justify-center md:justify-start items-center gap-6">
                            <a className={`w-full text-center text-white px-4 hover:no-underline hover:text-white rounded bg-orange h-[36px] flex items-center ${pathName.includes("/contact-us") ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} onClick={disableContactUs} href='/contact-us'>Contact Us</a>
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