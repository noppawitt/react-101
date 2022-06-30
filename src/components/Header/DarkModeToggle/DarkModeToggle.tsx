import { useEffect, useState } from 'react';
import { ReactComponent as SunIcon } from '@/assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from '@/assets/icons/moon.svg';
import './style.css';

const darkModeFromSystem = (): boolean => {
  return (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
};

const setDarkMode = (isDarkMode: boolean) => {
  document.documentElement.setAttribute(
    'data-theme',
    isDarkMode ? 'dark' : 'light',
  );
};

const saveState = (isDarkMode: boolean) => {
  localStorage.setItem('darkmode', String(isDarkMode));
};

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeFromStorage = localStorage.getItem('darkmode');

    const initialState =
      darkModeFromStorage === null
        ? darkModeFromSystem()
        : darkModeFromStorage === 'true';

    setIsDarkMode(initialState);
    setDarkMode(initialState);
  }, []);

  const toggleDarkMode = () => {
    const newState = !isDarkMode;

    setIsDarkMode(newState);
    setDarkMode(newState);
    saveState(newState);
  };

  return (
    <div className="theme-toggle" onClick={toggleDarkMode}>
      {isDarkMode ? (
        <MoonIcon width={18} height={18} />
      ) : (
        <SunIcon width={25} height={25} />
      )}
    </div>
  );
};

export default DarkModeToggle;
