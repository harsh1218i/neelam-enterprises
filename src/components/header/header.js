"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggleDropdown from './darkModeToggleDropdown';
import { usePathname } from "next/navigation";
import HeaderTop from './headerTop';
import ScrollProgressBar from './scrollProgressBar';
import { useAuth } from "../../context/AuthContext";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const hamBurgerRef = useRef(null);
    const dropdownRef = useRef(null);
    const pathName = usePathname();
    const isContactUsPage = pathName.includes("/contact-us");
    const { user, logout } = useAuth();

    // 👇 Scroll lock logic
    // useEffect(() => {
    //     const preventScroll = (e) => e.preventDefault();
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
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobileView(width < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (hamBurgerRef.current && !hamBurgerRef.current.contains(event.target)) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setTimeout(() => {
                        setIsOpen(false);
                        setIsDropdownOpen(false);
                    }, 0);
                }
            }
            // if (hamBurgerRef.current && !hamBurgerRef.current.contains(event.target) && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            //     setTimeout(() => setIsOpen(false), 0);
            // }
            // if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            //     setTimeout(() => setIsDropdownOpen(false), 0);
            // }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const disableContactUs = (event) => {
        if (isContactUsPage) {
            event.preventDefault();
        }
    };

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsDropdownOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setIsDropdownOpen(false);
    };

    return (
        <>
            <ScrollProgressBar />
            <HeaderTop />
            <header className="flex z-50 justify-center items-center shadow-3xl shadow-black dark:shadow-white bg-gray-200 dark:bg-gray-800 sticky top-0">
                <div className="w-full flex justify-between bg-gray-200 dark:bg-gray-800 top-0 z-[101] h-[56px] px-4 xl:px-20 lg:px-10 max-w-[1310px] items-center">

                    {/* Left Logo */}
                    <Link href="/" onClick={closeMenu}>
                        <div className="relative w-[56px] h-[56px] flex items-center justify-center cursor-pointer">
                            <div className="absolute inset-0 z-0 rounded-sm overflow-hidden">
                                <div className="absolute inset-0 animate-border-move bg-[length:200%_200%] bg-gradient-to-tr to-lime-100 via-lime-400 from-green-700" />
                            </div>
                            <div className="absolute inset-[2px] rounded-sm bg-gray-200 dark:bg-gray-800 z-10" />
                            <Image alt="Logo" className="relative z-20 rounded-sm" src="/favicon-16x16.png" width={56} height={56} />
                        </div>
                    </Link>

                    {/* Middle Navigation */}
                    <nav className={`${isOpen ? "flex flex-col" : "hidden"} lg:flex lg:flex-row lg:items-center lg:static absolute top-[56px] left-0 w-full bg-white dark:bg-gray-800 shadow-md lg:shadow-none`}>
                        <ul className="flex flex-col justify-center lg:items-center lg:flex-row w-full lg:bg-gray-200 lg:dark:bg-gray-800 max-lg:bg-gray-300 max-lg:dark:bg-gray-700 max-lg:py-2">

                            <li onClick={closeMenu}>
                                <Link href="/" className="nav-link">Home</Link>
                            </li>

                            <li className="relative" ref={dropdownRef}>
                                <button onClick={toggleDropdown} className="nav-link flex flex-row items-center gap-1">
                                    <span>About</span>
                                    <svg className="w-4 h-4 text-orangee" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.583l3.71-4.352a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <ul className="absolute max-lg:left-4 lg:top-[50px] max-lg:top-full mt-1 lg:mt-0 bg-white dark:bg-gray-600 shadow-lg rounded-md overflow-hidden">
                                        <li onClick={closeMenu}>
                                            <Link href="/about/portfolio" className="dropdown-link">Personal Portfolio</Link>
                                        </li>
                                        <li onClick={closeMenu}>
                                            <Link href="/about/company" className="dropdown-link">Company Info</Link>
                                        </li>
                                        <li onClick={closeMenu}>
                                            <Link href="/about/certifications" className="dropdown-link">Certifications & Licenses</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            <li onClick={closeMenu}>
                                <Link href="/services" className="nav-link">Services</Link>
                            </li>
                            <li onClick={closeMenu}>
                                <Link href="/gallery" className="nav-link">Gallery</Link>
                            </li>
                            <li onClick={closeMenu}>
                                <Link href="/blogs" className="nav-link">Blogs</Link>
                            </li>

                            {isMobileView && (
                                <li className="flex justify-between mt-4 items-center w-full px-4">
                                    <Link href="/contact-us" onClick={disableContactUs} className={`btn-contact ${isContactUsPage ? "opacity-50 cursor-not-allowed" : ""}`}>
                                        Contact Us
                                    </Link>
                                    {user ? (
                                        <button onClick={() => { logout(); closeMenu(); }} className="btn-logout">Logout</button>
                                    ) : (
                                        <Link href="/login" onClick={closeMenu} className="btn-login">Login</Link>
                                    )}
                                </li>
                            )}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-3">
                        {!isMobileView && (
                            <>
                                <Link href="/contact-us" onClick={disableContactUs} className={`btn-contact ${isContactUsPage ? "opacity-50 cursor-not-allowed" : ""}`}>
                                    Contact Us
                                </Link>
                                {user ? (
                                    <button onClick={logout} className="btn-logout">Logout</button>
                                ) : (
                                    <Link href="/login" className="btn-login">Login</Link>
                                )}
                            </>
                        )}

                        {user && (
                            <Link href="/profile" className="text-green-700 hover:underline underline-offset-2 dark:text-green-300 text-sm inline-block" onClick={closeMenu}>
                                Welcome <br />{user.displayName ? user.displayName.split(' ')[0] : user.phoneNumber}
                            </Link>
                        )}

                        <DarkModeToggleDropdown />

                        <div
                            onClick={() => {
                                setIsOpen(prev => !prev);
                                setIsDropdownOpen(false);
                            }}
                            ref={hamBurgerRef}
                            className="block lg:hidden cursor-pointer"
                        >
                            {isOpen ? (
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M3 6h18M3 12h18M3 18h18" />
                                </svg>
                            )}
                        </div>
                    </div>

                </div>
            </header>
        </>
    );
};

export default Header;