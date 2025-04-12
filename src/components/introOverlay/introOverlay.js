'use client';
import { useEffect, useState } from 'react';

export default function IntroOverlay({ onContinue }) {
    const [isVisible, setIsVisible] = useState(true);
    const [showContinue, setShowContinue] = useState(false);

    useEffect(() => {
        const seen = localStorage.getItem('introSeen');
        if (seen === 'true') {
            setIsVisible(false);
            return;
        }

        const audio = new Audio('/audio/intro.mp3');
        audio.play().catch(() => { });

        const timer = setTimeout(() => {
            setShowContinue(true);
        }, 6000); // show after 6s

        return () => clearTimeout(timer);
    }, []);

    const handleContinue = () => {
        localStorage.setItem('introSeen', 'true');
        setIsVisible(false);
        onContinue();
    };

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 bg-black text-white z-[9999] flex items-center justify-center cursor-pointer animate-fade-in"
            onClick={handleContinue}
        >
            <div className="text-center px-4 sm:px-8 animate-zoom-in space-y-6 max-w-4xl">
                <p className="text-2xl sm:text-3xl font-semibold leading-snug text-gray-300">
                    Your Bloodline will either be filled with <span className="text-red-500">weak men</span> or it will start with <span className="text-white underline">you</span>.
                </p>
                <p className="text-2xl sm:text-3xl font-semibold leading-snug text-orange-500">
                    Be the one they look back on and say:
                </p>
                <p className="text-2xl sm:text-3xl font-semibold leading-snug text-yellow-400">
                    "That's where the legacy began. That's the man who changed everything."
                </p>
                <p className="text-xl sm:text-2xl font-medium text-gray-400">
                    Your name should echo through generations not as someone who existed,
                    but as someone who <span className="text-white">rebuilt the standard</span>.
                </p>
                <p className="text-lg sm:text-xl font-medium text-red-400">
                    Most men inherit weakness and pass it on.
                </p>
            </div>

            {showContinue && (
                <p className="absolute bottom-4 right-6 text-sm sm:text-base text-gray-400 animate-blink">
                    Click anywhere to continue
                </p>
            )}
        </div>
    );
}