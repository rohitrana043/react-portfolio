import { NavLink } from 'react-router-dom';
import {
  FiHome,
  FiFolder,
  FiBriefcase,
  FiFileText,
  FiMail,
} from 'react-icons/fi';

function Navbar({ mobile, setIsMenuOpen }) {
  const navItems = [
    { to: '/', icon: FiHome, label: 'Home' },
    { to: '/projects', icon: FiFolder, label: 'Projects' },
    { to: '/credentials', icon: FiBriefcase, label: 'Credentials' },
    { to: '/resume', icon: FiFileText, label: 'Resume' },
    // { to: '/contact', icon: FiMail, label: 'Contact' },
  ];

  const handleClick = () => {
    if (mobile && setIsMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`${mobile ? 'flex flex-col space-y-2' : 'flex space-x-4'}`}>
      {navItems.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          onClick={handleClick}
          className={({ isActive }) => `
            flex items-center space-x-2 px-3 py-2 rounded-md
            ${mobile ? 'w-full' : ''}
            ${
              isActive
                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }
          `}
        >
          <Icon />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
