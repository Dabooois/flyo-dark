import React from 'react';
import Logo from '../../assets/images/logo.svg';
import { StyledHeader } from './Header.styles';

const Header = () => {
  return (
    <header id='header' className='bg-header-color py-10'>
      <div className='container flex items-center'>
        <div className='shrink-0'>
          <img className='h-8 md:h-12' src={Logo} alt='Logo' />
        </div>
        <nav className='ml-auto text-slate-50 md:text-[1.6rem] text-[1.2rem] '>
          <ul className='flex flex-row ml-4 '>
            <li className='px-5 lg:px-7 hover:underline'>
              <a href='#'>Features</a>
            </li>
            <li className='px-5 lg:px-7 hover:underline'>
              <a href='#'>Team</a>
            </li>
            <li className='pl-5 lg:px-7 hover:underline'>
              <a href='#'>Signin</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
