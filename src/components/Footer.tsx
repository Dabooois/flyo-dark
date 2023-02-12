import React from 'react';
import Logo from '../assets/images/logo.svg';
import Location from '../assets/images/icon-location.svg';
import Phone from '../assets/images/icon-phone.svg';
import Email from '../assets/images/icon-email.svg';

const Footer = () => {
  return (
    <footer className='bg-footer-color  relative  mt-[-17rem] pt-[17rem] lg:mt-[-11rem] lg:pt-[-11rem] z-[-20] pb-16'>
      <div className='container max-w-screen-md'>
        <img className='w-auto h-14 my-16' src={Logo} alt='Logo' />

        <div className='lg:grid grid-cols-footer lg:gap-16'>
          <div className=' flex items-start gap-8 pb-4'>
            <img
              src={Location}
              className='w-6 shrink-0 lg:mt-3'
              alt='location icon'
            />
            <p className='text-xl lg:text-2xl leading-8 lg:leading-10 text-slate-300 '>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio vel fugiat quibusdam consequuntur quod eaque?
            </p>
          </div>
          <div className='lg:col-start-2'>
            <div className='flex items-center gap-8 py-4 lg:pt-0'>
              <img
                src={Phone}
                className='w-6 self-center shrink-0'
                alt='location icon'
              />
              <p className='text-xl lg:text-2xl leading-8 lg:leading-10 text-slate-300'>
                09366028024
              </p>
            </div>
            <div className=' flex items-center gap-8 '>
              <img
                src={Email}
                className='w-6 self-center shrink-0'
                alt='location icon'
              />
              <p className='text-xl lg:text-2xl leading-8 lg:leading-10 text-slate-300'>
                cacayan.edcel26@gmail.com
              </p>
            </div>
          </div>
          <nav className='text-slate-50 text-xl lg:text-2xl leading-10 footer-nav mt-16 lg:mt-0'>
            <ul className=''>
              <li className='pb-4'>
                <a href='#'>About Us</a>
              </li>
              <li className='py-4'>
                <a href='#'>Jobs</a>
              </li>
              <li className='py-4'>
                <a href='#'>Press</a>
              </li>
              <li className='pt-4'>
                <a href='#'>Blog</a>
              </li>
            </ul>
          </nav>
          <nav className='footer-nav text-slate-50 text-xl lg:text-2xl mt-16 lg:mt-0'>
            <ul>
              <li className='pb-4'>
                <a href='#'>Contact Us</a>
              </li>
              <li className='py-4'>
                <a href='#'>Terms</a>
              </li>
              <li className='pt-4'>
                <a href='#'>Privacy</a>
              </li>
            </ul>
          </nav>
          <div className=' mt-14 lg:mt-0  flex items-center  lg:items-start justify-center relative'>
            <i className='rounded-full ri-facebook-circle-line text-5xl leading-none px-4 lg:pt-0 '></i>
            <i className='rounded-full ri-twitter-line text-5xl leading-none px-4  lg:pt-0'></i>
            <i className='rounded-full ri-instagram-line text-5xl leading-none px-4 lg:pt-0'></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
