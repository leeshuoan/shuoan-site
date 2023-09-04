import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className={`bg-white bg-opacity-75 dark:bg-[#171F2D] dark:bg-opacity-75 sticky top-0 ${isMenuOpen ? 'overflow-hidden h-screen' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between h-14 ${isMenuOpen ? 'pb-5' : ''}`}>
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className='text-xl font-bold dark:text-white dark:hover:text-[#4DBBAC] hover:text-[#4DB8AC]'>
              Shuoan
            </Link>
            <div className={`hidden md:flex items-center ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
              <div className="hidden md:flex items-center">
                <div className="ml-8 flex it items-center space-x-4">
                  <Link href="/about" className='text-[#868686] dark:hover:text-[#4DBBAC] hover:text-[#4DB8AC]'>
                    About
                  </Link>
                  <Link href="/projects" className='text-[#868686] dark:hover:text-[#4DBBAC] hover:text-[#4DB8AC]'>
                    Projects
                  </Link>
                  <Link href="/blog" className='text-[#868686] dark:hover:text-[#4DBBAC] hover:text-[#4DB8AC]'>
                    Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={`hidden md:flex ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
            <button onClick={toggleDarkMode}>
              {isDarkMode ? <FaSun className='text-[#D69C11]' /> : <FaMoon className='text-[#243F6F]' />}
            </button>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
