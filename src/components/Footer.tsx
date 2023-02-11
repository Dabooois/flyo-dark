import React from 'react';
import Logo from '../assets/images/logo.svg';
import Location from '../assets/images/icon-location.svg';
import Phone from '../assets/images/icon-phone.svg';
import Email from '../assets/images/icon-email.svg';

import Facebook from '../assets/images/facebook.svg';
import Twitter from '../assets/images/twitter.svg';
import IG from '../assets/images/ig.svg';

const Footer = () => {
  return (
    <footer className='bg-footer-color  relative  pb-8  mt-[-15.75rem] pt-[15.75rem] z-[-20]'>
      <div className='mt-[2rem] container max-w-screen-md'>
        <img className='w-auto h-14 my-16' src={Logo} alt='Logo' />
        <div className='md:grid md:grid-cols-5'>
          {/* <div className='col-start-1 col-span-2 contact_info flex flex-col md:flex-row gap-8 mt-16'> */}
          <div className=' location flex items-start  gap-7  mb-5'>
            <img src={Location} className=' w-7' alt='location icon' />
            <p className='text-xl leading-8 text-slate-300'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio vel fugiat quibusdam consequuntur quod eaque?
            </p>
          </div>
          <div className='col-start-2'>
            <div className='contact_number flex items-center gap-7  mb-5'>
              <img src={Phone} className=' self-center' alt='location icon' />
              <p className=' text-xl leading-8 text-slate-300'>09366028024</p>
            </div>
            <div className='email flex items-center gap-7'>
              <img src={Email} className=' self-center' alt='location icon' />
              <p className='text-xl leading-8 text-slate-300'>
                cacayan.edcel26@gmail.com
              </p>
            </div>
          </div>
          {/* </div>   */}

          <nav className='text-slate-50 text-lg footer-nav'>
            <ul>
              <li>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>Jobs</a>
              </li>
              <li>
                <a href='#'>Press</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
            </ul>
          </nav>

          <nav className='footer-nav text-slate-50 text-lg'>
            <ul>
              <li>
                <a href='#'>Contact Us</a>
              </li>
              <li>
                <a href='#'>Terms</a>
              </li>
              <li>
                <a href='#'>Privacy</a>
              </li>
            </ul>
          </nav>

          <div className=' mt-14  flex items-center  md:items-start justify-center icon_links relative'>
            <i className='inline-block rounded-full ri-facebook-circle-line text-[3rem] p-4 '></i>
            <i className='inline-block rounded-full ri-twitter-line text-[3rem] p-4 '></i>
            <i className='inline-block rounded-full ri-instagram-line text-[3rem] p-4 '></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
