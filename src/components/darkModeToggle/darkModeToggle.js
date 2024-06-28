import { useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';

const DarkModeToggle = () => {
  const [theme, setTheme] = useState('light');

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

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleTheme}
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-1000 focus:outline-none focus:ring-2 focus:ring-offset-2 ${theme === 'light' ? 'bg-gray-300 focus:ring-offset-gray-800 focus:ring-white' : 'bg-gray-700 focus:ring-gray-800'}`}
        data-tooltip-id='dark-mode-theme-toggle'
        data-tooltip-content={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        data-tooltip-place='bottom-start'
        data-tooltip-offset='0'
        data-tooltip-variant={theme === 'light' ? 'light' : 'dark'}
        data-tooltip-float={true}
      >
        <span className="sr-only">Toggle dark mode</span>
        <span
          className={`inline-block w-4 h-4 transform bg-white rounded-full shadow transition-transform duration-300 ${theme === 'light' ? 'translate-x-1' : 'translate-x-6'}`}
        />
      </button>
      <Tooltip id='dark-mode-theme-toggle'/>
    </div>
  );
};

export default DarkModeToggle;