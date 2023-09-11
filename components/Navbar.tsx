import { useState, useEffect } from 'react';
import Link from 'next/link';
import { GithubIcon, HomeIcon, InstagramIcon, LinkedInIcon } from './SVGIcons'
import { FaMoon, FaSun, FaHome } from 'react-icons/fa';

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
    <nav className={`bg-white bg-opacity-60 backdrop-blur-sm dark:bg-[#121822] transition-[background-color] duration-500 ease-in-out dark:bg-opacity-75 sticky top-0 ${isMenuOpen ? 'overflow-hidden h-screen' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between h-14 ${isMenuOpen ? 'pb-5' : ''}`}>
          <div className="flex items-center">
            <Link href="/" className="overflow-hidden relative inline-block group">
              <span style={{ height: "1.5px" }} className="absolute text-xl font-bold dark:text-white bg-[#4DBBAC] bottom-0 transform origin-right scale-x-0 transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100">FillerText</span>
              <span className="text-xl font-bold  absolute flex w-full left-0 transform origin-right translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 text-[#4DBBAC]"><HomeIcon /> Home</span>
              <span className="text-xl font-bold dark:text-[#BCBCBC] inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-[-200%]">Shuoan</span>
            </Link>

            <div className={`hidden md:flex items-center ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
              <div className="ml-8 flex it items-center gap-4">
                <Link href="/about" className='relative group text-[#BCBCBC] dark:hover:text-[#4DBBAC] hover:text-[#4DB8AC]'>
                  <span style={{ height: "1.5px" }} className="absolute w-full  rounded-md bg-[#4DBBAC] bottom-0 left-0 origin-right transform scale-x-0 transition-transform duration-300 ease-in-out  group-hover:origin-left group-hover:scale-x-100"></span>
                  About
                </Link>
                <Link href="/projects" className=' relative group text-[#BCBCBC] dark:hover:text-[#4DBBAC] hover:text-[#4DB8AC]'>
                  <span style={{ height: "1.5px" }} className="absolute w-full  rounded-md bg-[#4DBBAC] bottom-0 left-0 origin-right transform scale-x-0 transition-transform duration-300 ease-in-out  group-hover:origin-left group-hover:scale-x-100"></span>
                  Projects
                </Link>
                <Link href="/blog" className='relative group text-[#BCBCBC] dark:hover:text-[#4DBBAC] hover:text-[#4DB8AC]'>
                  <span style={{ height: "1.5px" }} className="absolute w-full  rounded-md bg-[#4DBBAC] bottom-0 left-0 origin-right transform scale-x-0 transition-transform duration-300 ease-in-out  group-hover:origin-left group-hover:scale-x-100"></span>
                  Blog
                </Link>
              </div>
            </div>
          </div>

          <div className={`hidden md:flex items-center gap-1 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
            <Link href='https://www.instagram.com/sa._.climbs' target='_blank' className='flex text-[#BCBCBC] rounded-full hover:shadow-lg hover:text-white p-0.5 hover:bg-gradient-to-br from-[#fdf497] via-[#fd5949] to-[#285AEB] via-[#d6249f]'>
              <InstagramIcon className="items-center h-6 w-6 m-0.5 " />
            </Link>
            <Link href='https://www.linkedin.com/in/lee-shuoan' target='_blank' className='flex text-[#BCBCBC] rounded-full hover:shadow-lg hover:text-white p-0.5 hover:bg-[#0A66C2]'>
              <LinkedInIcon className=" items-center h-6 w-6 m-0.5 " />
            </Link>
            <Link href='https://www.github.com/leeshuoan' target='_blank' className='flex text-[#BCBCBC] rounded-full hover:shadow-lg p-0.5 hover:text-black hover:bg-[#EAEEF2] dark:hover:bg-[#30363D] dark:hover:text-white'>
              <GithubIcon className="items-center h-6 w-6 m-0.5 " />
            </Link>
            <div onClick={toggleDarkMode} className={`${isDarkMode ? 'hover:text-[#D69C11] hover:bg-[#D69C11]' : 'flex hover:text-[#243F6F] hover:bg-[#243F6F]'} rounded-full hover:cursor-pointer hover:shadow-lg p-0.5 text-[#BCBCBC]  hover:bg-opacity-20`}>
              {isDarkMode ? <FaSun className='items-center m-1.5' /> : <FaMoon className='items-center m-1.5' />}
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
