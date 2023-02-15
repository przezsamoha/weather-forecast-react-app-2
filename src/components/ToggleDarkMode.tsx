import LightModeIcon from "./Icons/LightModeIcon";
import DarkModeIcon from "./Icons/DarkModeIcon";

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
        name="toggleDarkMode"
        type="button"
        onClick={toggleDarkMode}
        className="button absolute m-5 top-0 right-0 hover:fill-neutral-900"
      >
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </div>
  );
}
