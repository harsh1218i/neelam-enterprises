"use client"
import "./header.scss"
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-[101] bg-transparent shadow-header xs:overflow-y-scroll md:overflow-y-visible">
            <div className="block max-w-[1440px] mx-auto px-3 py-2 h-full max-h-lvh lg:flex md:justify-between lg:px-20 md:px-8 xs:px-4 xs:h-full xs:gap-4 shadow-header xs:overflow-y-scroll md:overflow-y-visible md:max-h-max sticky top-0 bg-transparent">
                <div className="container px-4 flex lg:basis-1/3 justify-between items-center">
                    <div className="text-lg font-bold inline-block">
                        <Link href="/" legacyBehavior>
                            <a className="text-gray-800 hover:text-gray-600">
                                MyLogo
                            </a>
                        </Link>
                    </div>
                    <div className="flex lg:hidden items-center gap-3">
                        <a className='contact-us-button block md:w-auto text-center text-white text-text-md leading-text-md py-1 px-2 font-Inter cursor-pointer hover:no-underline hover:text-white rounded' href="/contact-us">Contact Us</a>
                        <div onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-800">
                            <img src={isOpen ? 'https://res.cloudinary.com/drzta9shk/image/upload/v1708320848/website/HomePage_Feb24/close_tt92ba.svg' : 'https://res.cloudinary.com/drzta9shk/image/upload/v1708320848/website/HomePage_Feb24/menu_o9eo6y.svg'} alt={isOpen ? 'Cross' : 'Menu'} />
                        </div>
                    </div>
                </div>
                <nav className={`${isOpen ? 'flex' : 'hidden'} px-4 lg:flex lg:items-center lg:w-auto w-full`}>
                    <ul className="lg:flex lg:justify-between text-base text-gray-700 pt-4 lg:pt-0">
                        <li>
                            <Link href="/" legacyBehavior>
                                <a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" legacyBehavior>
                                <a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
                                    About
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" legacyBehavior>
                                <a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
                                    Services
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" legacyBehavior>
                                <a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
                                    Gallery
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="hidden lg:flex md:flex-row justify-center md:justify-start items-center gap-6">
                    <a className='contact-us-button w-full md:w-auto text-center text-white text-text-md leading-text-md py-2 px-4 font-Inter cursor-pointer hover:no-underline hover:text-white rounded' href="/contact-us">Contact Us</a>
                </div>
            </div>
        </header>
    );
};

export default Header;