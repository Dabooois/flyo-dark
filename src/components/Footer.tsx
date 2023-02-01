import React from 'react';
import Logo from '../assets/images/logo.svg';
import Location from '../assets/images/icon-location.svg';
import Phone from '../assets/images/icon-phone.svg';
import Email from '../assets/images/icon-email.svg';

const Footer = () => {
  return (
    <footer className='footer-bg  relative  pb-8  mt-[-15.75rem] pt-[15.75rem] z-[-20]'>
      <div className='mt-[2rem] container'>
        <img className='w-auto h-14 mt-16' src={Logo} alt='Logo' />
        <div className='contact_info flex flex-col gap-8 mt-16'>
          <div className='location flex items-start  gap-5'>
          <i className="ri-map-pin-2-line text-[1.8rem]"></i>
            {/* <img src={Location} className='h-7 leading-8' alt='location icon' /> */}
            <p className='text-xl leading-8 text-slate-300'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio vel fugiat quibusdam consequuntur quod eaque?
            </p>
          </div>
          <div className='contact_number flex items-center gap-5'>
          <i className="ri-phone-line text-[1.8rem]"></i>
            <p className=' text-xl leading-8 text-slate-300'>09366028024</p>
          </div>
          <div className='email flex items-center gap-5'>
          <i className="ri-mail-line text-[1.8rem]"></i>
            <p className='text-xl leading-8 text-slate-300'>
              cacayan.edcel26@gmail.com
            </p>
          </div>
        </div>

        <nav className='text-slate-50 text-lg' id='footer-nav'>
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

        <div className=' mt-14  flex items-center justify-center icon_links relative'>
          <i className='inline-block rounded-full ri-facebook-circle-line text-[3rem] p-4'></i>
          <i className='inline-block rounded-full ri-twitter-line text-[3rem] p-4 '></i>
          <i className='inline-block rounded-full ri-instagram-line text-[3rem] p-4 '></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
