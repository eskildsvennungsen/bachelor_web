import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoColored from '../logo_coloured_tronrud_hl.svg';
import GitHubLogo from '../img/Git-Icon-Black.svg'
import NavDocDropdown from './NavDocDropdownComponent';
import { navbarItems } from '../PageLinks' 
import '../App.css';
 
const Navbar = () => {
  const [isOpen, toggleBurger] = useState(false);

  return (
    <nav className='bg-white/70 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 backdrop-blur-lg'>
      <div className='max-w-7xl container flex flex-wrap items-center justify-between mx-auto relative px-3'>
        <a href='/grupper/D05-23' className='flex items-center hidden md:block'>
          <img
            src={LogoColored}
            className='h-9 hover:animate-pulse hover:animate-infinite'
            alt='Logo'
          />
        </a>
        <a href='/grupper/D05-23' className='flex items-center md:hidden'>
          <img
            src={LogoColored}
            className='h-3 hover:animate-pulse hover:animate-infinite'
            alt='Logo'
          />
        </a>
        <div className='flex md:order items-center'>
        <div className='md:hidden'>
          <NavDocDropdown />
        </div>
          <button
            onClick={() => toggleBurger(!isOpen)}
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center pl-1.5 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none'
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
          <span className='md:hidden ml-3 p-1.5 rounded-lg hover:bg-gray-100 animate-grow hidden md:block'>
            <a href='https://github.com/eskildsvennungsen/bachelor_web'><img src={GitHubLogo} className='h-6' alt='Git'/></a>
          </span>
        </div>

        <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ' id='navbar-sticky'>
          <ul className='flex flex-col mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 items-center'>
            {navbarItems.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className='block py-2 pl-3 pr-4 text-base font-black text-gray-700 md:hover:text-red-500 md:p-0 hover:animate-pulse hover:animate-infinite'
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <NavDocDropdown />
            <span className='p-1.5 p-1.5 rounded hover:bg-gray-100'>
            <a href='https://github.com/eskildsvennungsen/bachelor_web'><img src={GitHubLogo} className='h-6' alt='Git'/></a>
            </span>
          </ul>
        </div>
      </div>
      <div className={isOpen ? '' : 'sr-only'} onClick={() => toggleBurger(!isOpen)}>
        <ul className='flex flex-row justify-center mt-2 md:hidden border-t border-gray-300'>
          {navbarItems.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className='block pt-3 pl-5 text-gray-700 hover:text-red-500 md:hover:text-blue-700 md:p-0 md:hidden'
              >
                {link.name}
              </Link>
            </li>
          ))}
          </ul>      
      </div>
    </nav>
  );
};

export default Navbar;
