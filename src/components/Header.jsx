import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

export default function Header({ isDark, toggleTheme }) {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex space-x-6 space-x-reverse text-black dark:text-white">
            <a href="#" className="hover:text-naftal-yellow">الرئيسية</a>
            <a href="#" className="hover:text-naftal-yellow">خدماتنا</a>
            <a href="#" className="hover:text-naftal-yellow">عن الشركة</a>
            <a href="#" className="hover:text-naftal-yellow">اتصل بنا</a>
          </nav>
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
}