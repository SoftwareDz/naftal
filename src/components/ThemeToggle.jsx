import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-naftal-blue hover:bg-naftal-blue/90 text-white"
      aria-label={isDark ? 'تفعيل الوضع النهاري' : 'تفعيل الوضع الليلي'}
    >
      {isDark ? (
        <SunIcon className="w-6 h-6 text-naftal-yellow" />
      ) : (
        <MoonIcon className="w-6 h-6 text-naftal-yellow" />
      )}
    </button>
  );
}