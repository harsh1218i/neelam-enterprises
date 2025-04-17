'use client';
import { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScroll(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent">
            <div
                className="h-full bg-orangee dark:bg-gray-400 transition-all duration-75"
                style={{ width: `${scroll}%` }}
            />
        </div>
    );
};

export default ScrollProgressBar;