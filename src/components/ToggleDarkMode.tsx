import LightModeIcon from './Icons/LightModeIcon';
import DarkModeIcon from './Icons/DarkModeIcon';

interface ToggleDarkModeProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

export default function ToggleDarkMode({
  toggleDarkMode,
  darkMode,
}: ToggleDarkModeProps) {
  return (
    <div className="object-right-top dark:text-neutral-100">
      <button
        aria-label="toggle dark mode button"
        tabIndex={0}
        onClick={toggleDarkMode}
        className="absolute m-5 top-0 right-0"
      >
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </div>
  );
}
