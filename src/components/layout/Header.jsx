import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Navbar from './Navbar';
import ThemeSwitcher from '../shared/ThemeSwitcher';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            &lt;Rohit Rana /&gt;
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Navbar />
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg">
          <div className="container mx-auto px-4 py-2">
            <Navbar mobile={true} setIsMenuOpen={setIsMenuOpen} />
            <div className="py-2">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
