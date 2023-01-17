import React from 'react'
import Logo from '../assets/images/logo.svg'
const Header = () => {
  return (
      <header className='max-w px-4 py-4 flex  items-center' id='header'>
          <div className='shrink-0'>
              <img className='w-auto h-12 ml-4' src={Logo} alt='Logo' />
          </div>
          <nav className='ml-auto text-slate-50'>
              <ul className='flex flex-row ml-4 '>
                  <li className='p-4 hover:underline'>
                      <a href="#">Features</a>
                  </li>
                  <li  className='p-4 hover:underline'>
                      <a href="#">Team</a>
                  </li>
                  <li  className='p-4 hover:underline'>
                      <a href="">Signin</a>
                  </li>
              </ul>
          </nav>
    </header>
  )
}

export default Header