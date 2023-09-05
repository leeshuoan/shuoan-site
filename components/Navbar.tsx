import { useState, useEffect } from 'react';
import Link from 'next/link';
import { GithubIcon, InstagramIcon, LinkedInIcon } from './SVGIcons'
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
          <div className="flex items-center">
            <Link href="/" className='text-xl font-bold dark:text-white dark:hover:text-[#4DBBAC] hover:text-[#4DB8AC]'>
              Shuoan
            </Link>
            <div className={`hidden md:flex items-center ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
              <div className="ml-8 flex it items-center gap-4">
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

          <div className={`hidden md:flex items-center gap-1 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
            <div className='flex text-[#868686] rounded-full hover:text-white p-0.5 hover:bg-gradient-to-br from-[#fdf497] via-[#fd5949] to-[#285AEB] via-[#d6249f]'>
              <InstagramIcon className="items-center h-6 w-6 m-0.5 " />
            </div>
            <div className='flex text-[#868686] rounded-full hover:text-white p-0.5 hover:bg-[#0A66C2]'>
              <LinkedInIcon className=" items-center h-6 w-6 m-0.5 " />
            </div>
            <div className='flex text-[#868686] rounded-full p-0.5 hover:bg-[#EAEEF2] dark:hover:bg-[#30363D] dark:hover:text-white'>
              <GithubIcon className="items-center h-6 w-6 m-0.5 " />
            </div>
            <div onClick={toggleDarkMode} className={`${isDarkMode ? 'hover:text-[#D69C11] hover:bg-[#D69C11]' : 'flex hover:text-[#243F6F] hover:bg-[#243F6F]'} rounded-full p-0.5 text-[#868686]  hover:bg-opacity-20`}>
              {isDarkMode ? <FaSun className='items-center m-1.5' /> : <FaMoon className='items-center m-1.5' />}
            </div>


          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
